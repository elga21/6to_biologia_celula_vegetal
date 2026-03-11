document.addEventListener('DOMContentLoaded', () => {
    const hotspotsContainer = document.getElementById('hotspots-container');
    const infoPanel = document.getElementById('info-panel');
    const organelleNameElem = document.getElementById('organelle-name');
    const organelleDescriptionElem = document.getElementById('organelle-description');
    const subcomponentsSection = document.getElementById('subcomponents-section');
    const subcomponentsList = document.getElementById('subcomponents-list');
    const closeInfoButton = document.getElementById('close-info');
    const connectorCanvas = document.getElementById('connector-canvas');
    const cellWrapper = document.getElementById('cell-wrapper');
    const funFactSection = document.getElementById('fun-fact-section');
    const funFactTextElem = document.getElementById('fun-fact-text');
    const landingPage = document.getElementById('landing-page');
    const explorerArea = document.getElementById('explorer-area');
    const enterBtn = document.getElementById('enter-btn');
    const backBtn = document.getElementById('back-to-landing');

    let activeHotspot = null;

    // Lógica de Navegación
    enterBtn.addEventListener('click', () => {
        landingPage.style.opacity = '0';
        landingPage.style.transform = 'translateY(-20px)';
        landingPage.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            landingPage.classList.add('hidden-ui');
            explorerArea.classList.remove('hidden-ui');
            explorerArea.style.opacity = '0';
            explorerArea.style.transform = 'translateY(20px)';

            // Forzar reflow para la animación de entrada
            explorerArea.offsetHeight;

            explorerArea.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
            explorerArea.style.opacity = '1';
            explorerArea.style.transform = 'translateY(0)';

            // Iniciar hotspots después de entrar
            initHotspots();
        }, 600);
    });

    backBtn.addEventListener('click', () => {
        explorerArea.style.opacity = '0';
        explorerArea.style.transform = 'translateY(20px)';
        explorerArea.style.transition = 'all 0.6s ease';

        setTimeout(() => {
            explorerArea.classList.add('hidden-ui');
            landingPage.classList.remove('hidden-ui');
            landingPage.style.opacity = '0';
            landingPage.style.transform = 'translateY(-20px)';

            // Forzar reflow
            landingPage.offsetHeight;

            landingPage.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
            landingPage.style.opacity = '1';
            landingPage.style.transform = 'translateY(0)';

            // Resetear estado del panel
            hideInfo();
        }, 600);
    });

    // Lógica del Efecto de "Linterna" (Fondo Revelado) - Global
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;

        document.documentElement.style.setProperty('--mouse-x', `${x}%`);
        document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    });

    // Inicializar Hotspots
    function initHotspots() {
        // Limpiar para evitar duplicados en re-entrada
        hotspotsContainer.innerHTML = '';
        Object.keys(organelleData).forEach(name => {
            const data = organelleData[name];
            const hotspot = document.createElement('div');
            hotspot.className = 'hotspot';
            hotspot.style.left = `${data.coords.x}%`;
            hotspot.style.top = `${data.coords.y}%`;
            hotspot.dataset.name = name;

            hotspot.addEventListener('click', (e) => {
                e.stopPropagation();
                showOrganelleInfo(name, hotspot);
            });

            hotspotsContainer.appendChild(hotspot);
        });
    }

    function showOrganelleInfo(name, hotspot) {
        const data = organelleData[name];
        if (!data) return;

        // Limpiar estado previo
        if (activeHotspot) activeHotspot.classList.remove('active');
        activeHotspot = hotspot;
        hotspot.classList.add('active');

        // Actualizar contenido
        organelleNameElem.textContent = name;
        organelleDescriptionElem.textContent = data.description;

        // Subcomponentes
        subcomponentsList.innerHTML = '';
        if (data.subcomponents && data.subcomponents.length > 0) {
            subcomponentsSection.classList.remove('hidden');
            data.subcomponents.forEach(sub => {
                const item = document.createElement('div');
                item.className = 'sub-item';
                item.innerHTML = `<strong>${sub.name}</strong><p>${sub.info}</p>`;
                subcomponentsList.appendChild(item);
            });
        } else {
            subcomponentsSection.classList.add('hidden');
        }

        // Sabías que... (Fun Fact)
        if (data.funFact) {
            funFactSection.classList.remove('hidden');
            funFactTextElem.textContent = data.funFact;
        } else {
            funFactSection.classList.add('hidden');
        }

        // Mostrar Panel
        infoPanel.classList.add('visible');

        // Dibujar Línea Conectora
        drawConnectorLine(hotspot);
    }

    function drawConnectorLine(hotspot) {
        const hotspotRect = hotspot.getBoundingClientRect();
        const wrapperRect = cellWrapper.getBoundingClientRect();
        const panelRect = infoPanel.getBoundingClientRect();

        // Coordenadas relativas al wrapper
        const startX = hotspotRect.left - wrapperRect.left + (hotspotRect.width / 2);
        const startY = hotspotRect.top - wrapperRect.top + (hotspotRect.height / 2);

        // Destino en el borde del panel (lado izquierdo o derecho según posición)
        const isPanelOnRight = panelRect.left > hotspotRect.right;
        const endX = isPanelOnRight ? wrapperRect.width : 0;
        const endY = panelRect.top - wrapperRect.top + (panelRect.height / 4);

        // Crear/Actualizar Línea SVG
        connectorCanvas.innerHTML = `
            <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:var(--accent-emerald);stop-opacity:1" />
                    <stop offset="100%" style="stop-color:var(--accent-cyan);stop-opacity:0.5" />
                </linearGradient>
            </defs>
            <path d="M ${startX} ${startY} L ${endX} ${endY}" 
                  stroke="url(#lineGrad)" 
                  stroke-width="2" 
                  fill="none" 
                  stroke-dasharray="1000" 
                  stroke-dashoffset="1000">
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="0.6s" fill="freeze" />
            </path>
            <circle cx="${startX}" cy="${startY}" r="4" fill="var(--accent-emerald)">
                <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
            </circle>
        `;
    }

    // Cerrar Panel
    function hideInfo() {
        infoPanel.classList.remove('visible');
        connectorCanvas.innerHTML = '';
        if (activeHotspot) activeHotspot.classList.remove('active');
        activeHotspot = null;
    }

    closeInfoButton.addEventListener('click', hideInfo);

    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!infoPanel.contains(e.target) && !e.target.classList.contains('hotspot')) {
            hideInfo();
        }
    });

    // Re-dibujar línea si se cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (activeHotspot) drawConnectorLine(activeHotspot);
    });
});
