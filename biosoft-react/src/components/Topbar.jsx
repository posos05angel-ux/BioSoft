import React from 'react';
import { useApp } from '../context/AppContext.jsx';

const META = {
  dashboard:{title:'Dashboard', crumb:'BIOSOFT / DASHBOARD'},
  equipos:{title:'Equipos', crumb:'BIOSOFT / EQUIPOS'},
  ordenes:{title:'Órdenes de Trabajo', crumb:'BIOSOFT / ÓRDENES DE TRABAJO'},
  kanban:{title:'Kanban', crumb:'BIOSOFT / KANBAN'},
  analitica:{title:'Analítica', crumb:'BIOSOFT / ANALÍTICA'},
  historial:{title:'Historial General', crumb:'BIOSOFT / HISTORIAL GENERAL'},
  calendario:{title:'Calendario', crumb:'BIOSOFT / CALENDARIO'},
};

export default function Topbar(){
  const { view } = useApp();
  const meta = META[view] || META.dashboard;
  const dateStr = new Date().toLocaleDateString('es-CO', { weekday:'long', day:'numeric', month:'long', year:'numeric' });

  return (
    <div className="topbar">
      <div>
        <h1>{meta.title}</h1>
        <div className="crumb">{meta.crumb}</div>
      </div>
      <div className="mono" style={{fontSize:12, color:'var(--ink-soft)'}}>{dateStr}</div>
    </div>
  );
}
