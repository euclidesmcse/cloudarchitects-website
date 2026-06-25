// Testar isPublicAdminRoute em isolamento
// Simula as mesmas condições do RootPage

function getRouteWithoutAdmin({ adminRoute, route }) {
  return adminRoute && adminRoute !== '/' ? route.replace(adminRoute, '') : route;
}

const publicAdminRoutes = ['createFirstUser', 'forgot', 'login', 'logout', 'forgot', 'inactivity', 'unauthorized', 'reset'];

function isPublicAdminRoute({ adminRoute, config, route }) {
  return publicAdminRoutes.some(routeSegment => {
    const segment = config?.admin?.routes?.[routeSegment] || routeSegment;
    const routeWithoutAdmin = getRouteWithoutAdmin({ adminRoute, route });
    console.log(`  checking segment="${routeSegment}" → segment value="${segment}", routeWithoutAdmin="${routeWithoutAdmin}", startsWith=${routeWithoutAdmin.startsWith(segment)}`);
    if (routeWithoutAdmin.startsWith(segment)) return true;
    if (routeWithoutAdmin.includes('/verify/')) return true;
    return false;
  });
}

// Teste 1: Config default (sem routes configurados)
const config1 = {
  admin: {
    user: 'users',
    routes: {} // vazio = defaults
  },
  routes: {
    admin: '/admin'
  }
};

console.log("=== Teste 1: Config com routes vazio ===");
const result1 = isPublicAdminRoute({ adminRoute: '/admin', config: config1, route: '/admin/login' });
console.log(`Resultado: ${result1}\n`);

// Teste 2: Config com routes.login definido
const config2 = {
  admin: {
    user: 'users',
    routes: { login: 'login' }
  },
  routes: {
    admin: '/admin'
  }
};

console.log("=== Teste 2: Config com routes.login = 'login' ===");
const result2 = isPublicAdminRoute({ adminRoute: '/admin', config: config2, route: '/admin/login' });
console.log(`Resultado: ${result2}\n`);

// Teste 3: adminRoute diferente
const config3 = {
  admin: {
    user: 'users'
  },
  routes: {
    admin: '/admin'
  }
};
console.log("=== Teste 3: Sem admin.routes (undefined) ===");
const result3 = isPublicAdminRoute({ adminRoute: '/admin', config: config3, route: '/admin/login' });
console.log(`Resultado: ${result3}\n`);

// Teste 4: route sem /admin prefix
console.log("=== Teste 4: route='/login' (sem admin prefix) ===");
const result4 = isPublicAdminRoute({ adminRoute: '/admin', config: config1, route: '/login' });
console.log(`Resultado: ${result4}\n`);
