import type { CollectionConfig } from 'payload'
import crypto from 'crypto'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    // useSessions:true quebra o login (loop): a estratégia JWT do Payload carrega
    // o usuário via findByID SEM overrideAccess, e o access.read do campo `sessions`
    // (user?.id === doc?.id) o remove enquanto req.user ainda é null durante a auth,
    // fazendo a verificação de sessão falhar sempre. JWT puro é o padrão e resolve.
    useSessions: false,
    maxLoginAttempts: 0,
    depth: 1,
  },
  // hooks removed for debugging
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
  versions: false,
}
