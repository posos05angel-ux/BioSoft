import React from 'react';
import { useApp } from '../context/AppContext.jsx';

const NAV = [
  { key:'dashboard', label:'Dashboard', ic:'◧' },
  { key:'equipos', label:'Equipos', ic:'⚙' },
  { key:'ordenes', label:'Órdenes de Trabajo', ic:'🛠' },
  { key:'kanban', label:'Kanban', ic:'▤' },
  { key:'analitica', label:'Analítica', ic:'📊' },
  { key:'historial', label:'Historial General', ic:'≡' },
  { key:'calendario', label:'Calendario', ic:'📅' },
];

export default function Sidebar(){
  const { view, setView, user, logout } = useApp();
  const initials = (user?.name || 'BS').split(' ').filter(Boolean).map(s=>s[0]).slice(0,2).join('').toUpperCase();

  return (
    <aside className="sidebar">
      <div className="brand-mark"><span className="dot"></span><span>BIOSOFT</span></div>
      <ul className="navlist">
        {NAV.map(n => (
          <li key={n.key}>
            <button className={view===n.key ? 'active' : ''} onClick={()=>setView(n.key)}>
              <span className="ic">{n.ic}</span>{n.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="sidebar-foot">
        <div className="user-chip">
          <div className="avatar">{initials || 'BS'}</div>
          <div className="who">
            <div className="name">{user?.name || 'Director(a)'}</div>
            <div className="role">{user?.role || 'Dirección de Ingeniería Biomédica'}</div>
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
      </div>
    </aside>
  );
}
