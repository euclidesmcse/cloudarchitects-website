'use client';

import { useState } from 'react';

export default function CustomLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await res.json();

      if (data.token) {
        // Store JWT token (useSessions: false), then redirect
        localStorage.setItem('payload-token', data.token);
        window.location.href = '/admin';
        return;
      } else {
        setError(data.errors?.[0]?.message || 'Credenciais inválidas');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#fff',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{
        maxWidth: 400,
        width: '100%',
        padding: '2rem',
        backgroundColor: '#1a1a1a',
        borderRadius: 8,
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
      }}>
        <h1 style={{ fontSize: 24, marginBottom: 8, textAlign: 'center' }}>
          Cloud Architects CMS
        </h1>
        <p style={{ color: '#888', textAlign: 'center', marginBottom: 24 }}>
          Faça login para aceder ao painel
        </p>

        {error && (
          <div role="alert" style={{
            backgroundColor: 'rgba(255,0,0,0.1)',
            border: '1px solid rgba(255,0,0,0.3)',
            color: '#ff6b6b',
            padding: '0.75rem',
            borderRadius: 4,
            marginBottom: 16,
            fontSize: 14,
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4, fontSize: 14, color: '#ccc' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#222',
                border: '1px solid #333',
                borderRadius: 4,
                color: '#fff',
                fontSize: 16,
                boxSizing: 'border-box',
              }}
              placeholder="admin@cloudarchitects.com"
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 4, fontSize: 14, color: '#ccc' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#222',
                border: '1px solid #333',
                borderRadius: 4,
                color: '#fff',
                fontSize: 16,
                boxSizing: 'border-box',
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: loading ? '#444' : '#0066ff',
              border: 'none',
              borderRadius: 4,
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'A entrar...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
