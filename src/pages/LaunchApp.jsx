
import React, { useState, useEffect } from "react";



const styleTagId = "launch-app-styles";
if (!document.getElementById(styleTagId)) {
  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Inter:wght@300;400;600&display=swap');

  :root{
    --bg: #0b0b0f;
    --card: #0f0f13;
    --muted: #9a9a9a;
    --accent: linear-gradient(135deg,#7c4dff,#3ad7ff);
    --glass: rgba(255,255,255,0.03);
    --radius: 18px;
  }

  *{box-sizing:border-box}
  body{background: radial-gradient(1000px 500px at 10% 10%, rgba(124,77,255,0.06), transparent), var(--bg); color:#fff; font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; padding:18px; -webkit-font-smoothing:antialiased}

  .launch-shell{
    max-width:420px;
    margin:24px auto;
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    border-radius:24px;
    border:1px solid rgba(255,255,255,0.08);
    padding:24px;
    box-shadow: 0 24px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.1);
    position:relative;
    backdrop-filter: blur(10px);
  }

  .top-pill{
    text-align:center;
    padding:12px 16px;
    border-radius:16px;
    background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size:18px;
    font-weight:600;
    color:#fff;
    margin-bottom:20px;
    border:1px solid rgba(255,255,255,0.06);
    letter-spacing:0.3px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .form-area{padding:6px 4px}

  .tax-breakdown{
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border-radius:14px;
    padding:16px 20px;
    margin-bottom:16px;
    border:1px solid rgba(255,255,255,0.05);
    border-top:2px solid rgba(108, 71, 255, 0.3);
  }
  .tax-row{
    display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;
  }
  .tax-row:last-child{ margin-bottom:0; margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.05); }
  .tax-label{ font-size:13px; color:var(--muted); font-weight:500; }
  .tax-value{ font-size:15px; color:#fff; font-weight:600; }
  .tax-total-label{ font-size:14px; color:#fff; font-weight:600; letter-spacing:0.2px; }
  .tax-total-value{ font-size:20px; color:#fff; font-weight:700; }
  .tax-badge{ 
    display:inline-flex; align-items:center; gap:4px; padding:4px 8px; 
    background:rgba(108, 71, 255, 0.15); border-radius:6px; font-size:11px; 
    color:#6c47ff; font-weight:600; margin-left:8px; 
  }

  .card{
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    border-radius:16px;
    padding:18px 20px;
    margin-bottom:16px;
    border:1px solid rgba(255,255,255,0.06);
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
    transition: all 0.2s ease;
  }
  .card:hover{ border-color:rgba(255,255,255,0.1); box-shadow: 0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08); }

  .label{
    font-size:13px;
    color:var(--muted);
    font-weight:600;
    letter-spacing:0.3px;
    margin-bottom:4px;
  }

  .input-like{
    background: transparent;
    border: none;
    outline:none;
    color:#fff;
    font-size:20px;
    font-weight:600;
    text-align:right;
    width:120px;
  }

  input.amount{
    background: transparent;
    border: none;
    outline:none;
    color:#fff;
    font-size:22px;
    font-weight:700;
    text-align:right;
    width:100%;
  }

  .wifi-card{
    border-radius:18px;
    padding:20px;
    min-height:140px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
  }

  .no-users{
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size:18px;
    font-weight:500;
    color:#cfcfcf;
    margin-top:8px;
    letter-spacing:0.2px;
  }

  .scan-btn{
    margin-top:10px;
    background: var(--card);
    border: 1px solid rgba(255,255,255,0.08);
    padding:12px 20px;
    border-radius:12px;
    cursor:pointer;
    font-weight:600;
    font-size:14px;
    letter-spacing:0.3px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .scan-btn:hover{ background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.12); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
  .scan-btn:active{ transform: translateY(0); }
  .scan-btn.primary{
    background: linear-gradient(90deg, #6c47ff, #29d2ff);
    color: #05050a;
    border:none;
    box-shadow: 0 8px 20px rgba(108, 71, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.2);
    font-weight:700;
  }
  .scan-btn.primary:hover{ box-shadow: 0 12px 28px rgba(108, 71, 255, 0.35), inset 0 1px 0 rgba(255,255,255,0.3); transform: translateY(-2px); }
  .scan-btn.primary:active{ transform: translateY(0); box-shadow: 0 6px 16px rgba(108, 71, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2); }

  .tiny{
    font-size:12px;
    color:var(--muted);
    margin-bottom:6px;
  }

  .footer{
    margin-top:20px;
    padding-top:16px;
    text-align:center;
    color:var(--muted);
    font-size:12px;
    line-height:1.5;
    border-top:1px solid rgba(255,255,255,0.05);
  }

  /* modal */
  .modal-backdrop{
    position:fixed; inset:0; background:rgba(0,0,0,0.75); backdrop-filter: blur(8px); display:flex; align-items:center; justify-content:center; z-index:60; animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .modal{
    width:90%; max-width:420px; background: linear-gradient(180deg, #13131a, #0e0e12); padding:0; border-radius:20px; border:1px solid rgba(255,255,255,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.8); animation: slideUp 0.3s ease; overflow: hidden;
  }
  .modal-header{
    padding:20px 24px; border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02);
  }
  .modal h3{ margin:0; font-size:20px; font-weight:700; color:#fff; }
  .modal-subtitle{ margin:4px 0 0 0; font-size:13px; color:var(--muted); }
  .modal-body{ padding:24px; max-height:60vh; overflow-y: auto; }
  .modal p{ margin:0 0 12px 0; color:var(--muted); font-size:14px; }
  .modal .actions{ display:flex; gap:10px; justify-content:flex-end; padding:16px 24px; border-top: 1px solid rgba(255,255,255,0.06); background: rgba(0,0,0,0.2); }
  .btn{ padding:10px 20px; border-radius:12px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.03); color:#fff; cursor:pointer; font-weight:600; font-size:14px; transition: all 0.2s ease; }
  .btn:hover{ background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.12); }
  .btn.primary{ background: linear-gradient(90deg, #6c47ff, #29d2ff); color:#05050a; border:none; box-shadow: 0 4px 12px rgba(108, 71, 255, 0.3); }
  .btn.primary:hover{ transform: translateY(-1px); box-shadow: 0 6px 16px rgba(108, 71, 255, 0.4); }
  .btn:disabled{ opacity:0.5; cursor:not-allowed; }
  .btn:disabled:hover{ transform:none; }

  /* Send button */
  .send-btn{
    width:100%; margin-top:16px; margin-bottom:24px; padding:16px 20px; background: linear-gradient(90deg, #6c47ff, #29d2ff); color:#05050a; border:none; border-radius:16px; font-weight:700; font-size:16px; cursor:pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 8px 20px rgba(108, 71, 255, 0.25), inset 0 1px 0 rgba(255,255,255,0.2); letter-spacing:0.5px; position:relative; overflow:hidden;
  }
  .send-btn::before{ content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition:left 0.5s; }
  .send-btn:hover:not(:disabled){ transform: translateY(-2px); box-shadow: 0 12px 32px rgba(108, 71, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.3); }
  .send-btn:hover:not(:disabled)::before{ left:100%; }
  .send-btn:active:not(:disabled){ transform: translateY(0); box-shadow: 0 6px 16px rgba(108, 71, 255, 0.3), inset 0 1px 0 rgba(255,255,255,0.2); }
  .send-btn:disabled{ opacity:0.5; cursor:not-allowed; background: rgba(255,255,255,0.05); color:var(--muted); box-shadow:none; }

  /* User list */
  .user-list{ display:flex; flex-direction:column; gap:12px; margin-top:16px; }
  .user-item{
    display:flex; align-items:center; gap:14px; padding:14px 16px; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.06); border-radius:14px; cursor:pointer; transition: all 0.2s ease;
  }
  .user-item:hover{ background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)); border-color:rgba(108, 71, 255, 0.3); transform: translateX(4px); }
  .user-item.selected{ background: linear-gradient(180deg, rgba(108, 71, 255, 0.15), rgba(41, 210, 255, 0.1)); border-color:rgba(108, 71, 255, 0.5); }
  .user-avatar{
    width:48px; height:48px; border-radius:50%; background: linear-gradient(135deg, #6c47ff, #29d2ff); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:18px; color:#fff; flex-shrink:0; box-shadow: 0 4px 12px rgba(108, 71, 255, 0.3);
  }
  .user-info{ flex:1; min-width:0; }
  .user-name{ font-weight:600; font-size:15px; color:#fff; margin-bottom:4px; }
  .user-details{ font-size:12px; color:var(--muted); display:flex; align-items:center; gap:8px; }
  .wifi-indicator{ display:inline-flex; align-items:center; gap:4px; }
  .wifi-icon{ width:14px; height:14px; }
  .amount-badge{ background: linear-gradient(90deg, rgba(108, 71, 255, 0.2), rgba(41, 210, 255, 0.2)); padding:6px 12px; border-radius:8px; font-weight:700; font-size:14px; color:#fff; border:1px solid rgba(255,255,255,0.1); }

  /* Loading states */
  .sending-state{ text-align:center; padding:40px 20px; }
  .sending-icon{ width:64px; height:64px; margin:0 auto 20px; position:relative; }
  .spinner{ width:64px; height:64px; border:3px solid rgba(255,255,255,0.1); border-top-color:#6c47ff; border-radius:50%; animation: spin 1s linear infinite; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .success-icon{ width:64px; height:64px; margin:0 auto 20px; background: linear-gradient(135deg, #6c47ff, #29d2ff); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:32px; animation: scaleIn 0.3s ease; }
  @keyframes scaleIn { from { transform: scale(0); } to { transform: scale(1); } }
  .sending-title{ font-size:20px; font-weight:700; color:#fff; margin-bottom:8px; }
  .sending-message{ font-size:14px; color:var(--muted); }

  /* Scanning state */
  .scanning-state{ text-align:center; padding:40px 20px; }
  .scanning-icon{ width:64px; height:64px; margin:0 auto 20px; position:relative; }
  .scanning-pulse{ width:64px; height:64px; border-radius:50%; background: linear-gradient(135deg, rgba(108, 71, 255, 0.3), rgba(41, 210, 255, 0.3)); animation: pulse 2s ease-in-out infinite; position:absolute; top:0; left:50%; transform:translateX(-50%); }
  @keyframes pulse { 0%, 100% { transform: translateX(-50%) scale(1); opacity:0.6; } 50% { transform: translateX(-50%) scale(1.3); opacity:0.2; } }
  .scanning-dots{ display:inline-flex; gap:6px; margin-top:16px; }
  .scanning-dot{ width:8px; height:8px; border-radius:50%; background:#6c47ff; animation: dotPulse 1.4s ease-in-out infinite; }
  .scanning-dot:nth-child(2){ animation-delay:0.2s; }
  .scanning-dot:nth-child(3){ animation-delay:0.4s; }
  @keyframes dotPulse { 0%, 80%, 100% { transform:scale(0.8); opacity:0.5; } 40% { transform:scale(1.2); opacity:1; } }
  .no-users-found{ text-align:center; padding:40px 20px; color:var(--muted); }
  .no-users-icon{ font-size:48px; margin-bottom:16px; opacity:0.5; }
  .network-info{ padding:12px 16px; background:rgba(255,255,255,0.02); border-radius:12px; margin-bottom:16px; font-size:12px; color:var(--muted); }
  .network-info strong{ color:#fff; margin-right:8px; }
  .server-status{ padding:12px 16px; background:rgba(255,255,255,0.02); border-radius:12px; margin-bottom:16px; font-size:12px; border-left:3px solid rgba(108, 71, 255, 0.5); }
  .server-status.connected{ border-left-color:#29d2ff; }
  .server-status.disconnected{ border-left-color:rgba(255,255,255,0.2); }
  .server-status strong{ color:#fff; margin-right:8px; display:block; margin-bottom:4px; }
  .server-url{ font-family:monospace; font-size:11px; color:var(--muted); background:rgba(0,0,0,0.2); padding:4px 8px; border-radius:6px; margin-top:6px; display:inline-block; }
  .server-ips{ margin-top:8px; font-size:11px; }
  .server-ip-item{ display:inline-block; margin-right:8px; margin-top:4px; padding:4px 8px; background:rgba(108, 71, 255, 0.1); border-radius:6px; font-family:monospace; }

  @media (max-width:480px){
    .launch-shell{ margin:12px; border-radius:16px; padding:12px }
    .modal{ width:95%; border-radius:16px; }
    .modal-header{ padding:16px 20px; }
    .modal-body{ padding:20px; }
    .modal .actions{ padding:12px 20px; }
  }
  `;
  const style = document.createElement("style");
  style.id = styleTagId;
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}

export default function LaunchApp() {
  const [sendAmount, setSendAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showSendModal, setShowSendModal] = useState(false);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [networkInfo, setNetworkInfo] = useState(null);
  const [webRTCConnection, setWebRTCConnection] = useState(null);
  const [wsServerStatus, setWsServerStatus] = useState(null);
  const [detectedServerIPs, setDetectedServerIPs] = useState([]);

  const onScanClick = () => {
    const ua = (navigator.userAgent || "").toLowerCase();
    const isAndroid = /android/.test(ua);
    const isIOS = /iphone|ipad|ipod/.test(ua);


    const tryOpen = (url) => {

      try {
        window.location.href = url;
    
        setTimeout(() => {
          setModalMessage(
            "If Wi-Fi settings didn't open automatically, please open your device Settings → Wi-Fi."
          );
          setShowModal(true);
        }, 800);
      } catch (e) {
        setModalMessage("Unable to open settings automatically on this browser.");
        setShowModal(true);
      }
    };

    if (isAndroid) {

      const intentUrl = "intent:#Intent;action=android.settings.WIFI_SETTINGS;end";
      tryOpen(intentUrl);
    } else if (isIOS) {
      const iosPrefs = "App-Prefs:root=WIFI";
      tryOpen(iosPrefs);
    } else {
    
      setModalMessage(
        "Open your system Wi-Fi settings manually. On desktop, open your OS network settings (Windows: Settings → Network & internet → Wi-Fi; macOS: System Settings → Wi-Fi)."
      );
      setShowModal(true);
    }
  };


  const parseAmount = (v) => {
    const n = v.replace(/[^0-9.]/g, "");
    setSendAmount(n);
  };


  const calculateTax = (amount) => {
    const numAmount = parseFloat(amount) || 0;
    return numAmount * 0.02; // 2% tax
  };

  const calculateTotal = (amount) => {
    const numAmount = parseFloat(amount) || 0;
    return numAmount + calculateTax(amount);
  };

  const formatCurrency = (value) => {
    return parseFloat(value || 0).toFixed(2);
  };


  const getNetworkInfo = async () => {
    const info = {
      type: 'unknown',
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0,
      saveData: false,
    };

  
    if ('connection' in navigator) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        info.type = connection.type || 'unknown';
        info.effectiveType = connection.effectiveType || 'unknown';
        info.downlink = connection.downlink || 0;
        info.rtt = connection.rtt || 0;
        info.saveData = connection.saveData || false;
      }
    }


    try {
      if ('getNetworkInformation' in navigator) {
        const networkInfo = await navigator.getNetworkInformation();
        if (networkInfo) {
          return { ...info, ...networkInfo };
        }
      }
    } catch (e) {
      console.log('Network info API not available');
    }

    return info;
  };


  const scanForPeers = async () => {
    setIsScanning(true);
    setNearbyUsers([]);
    setWsServerStatus(null);
    

    const netInfo = await getNetworkInfo();
    setNetworkInfo(netInfo);

 
    const localIPs = await detectLocalIPs();
    

    if (localIPs.length > 0) {
      setDetectedServerIPs(localIPs);
   
      if (!localStorage.getItem('paynet_ws_url')) {

        const serverIP = localIPs[0];
        localStorage.setItem('paynet_ws_url', `ws://${serverIP}:8080/`);
      }
    }

    const discoveredPeers = await discoverLocalPeers(localIPs);
    
    setIsScanning(false);
    setNearbyUsers(discoveredPeers);
  };


  const detectLocalIPs = () => {
    return new Promise((resolve) => {
      const localIPs = [];
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });

      pc.createDataChannel('');

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          const candidate = event.candidate.candidate;
      
          const ipMatch = candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
          if (ipMatch) {
            const ip = ipMatch[0];
            if (!localIPs.includes(ip) && 
                (ip.startsWith('192.168.') || 
                 ip.startsWith('10.') || 
                 ip.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./))) {
              localIPs.push(ip);
            }
          }
        } else {
    
          resolve(localIPs);
        }
      };

      pc.createOffer()
        .then(offer => pc.setLocalDescription(offer))
        .catch(() => resolve([]));

   
      setTimeout(() => resolve(localIPs), 3000);
    });
  };


  const discoverLocalPeers = async (localIPs) => {
    const peers = [];


    try {
      const userId = localStorage.getItem('paynet_user_id');
      const userName = localStorage.getItem('paynet_user_name') || `User ${userId?.slice(-6) || 'Unknown'}`;
      const userInitials = userName ? userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'U';
      
      const wsPort = 8080;
      let wsUrl = localStorage.getItem('paynet_ws_url') || `ws://localhost:${wsPort}/`;
      
      const ws = new WebSocket(wsUrl);
      
      let wsResolved = false;
      
  
      const connectionTimeout = setTimeout(() => {
        if (ws.readyState === WebSocket.CONNECTING || ws.readyState === WebSocket.OPEN) {
          ws.close();
        }
        if (!wsResolved) {
          wsResolved = true;
        }
      }, 3000);
      
      ws.onopen = () => {
        clearTimeout(connectionTimeout);
        setWsServerStatus({ connected: true, url: wsUrl });
        
 
        if (userId) {
          ws.send(JSON.stringify({
            type: 'register',
            peerId: userId,
            name: userName,
            initials: userInitials,
            signal: 'strong',
            distance: 'Nearby',
            localIPs: localIPs
          }));
        }
        
     
        ws.send(JSON.stringify({ 
          type: 'discover',
          localIPs: localIPs 
        }));
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          if (data.type === 'peers' && Array.isArray(data.peers)) {
        
            const formattedPeers = data.peers.map((peer) => {
          
              const distance = peer.signal === 'strong' ? '2-5m away' : 
                              peer.signal === 'medium' ? '6-12m away' : '13-20m away';
              
              return {
                id: peer.id,
                name: peer.name,
                initials: peer.initials || peer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
                distance: peer.distance || distance,
                signal: peer.signal || 'medium',
                ip: peer.ip,
              };
            });
            
            formattedPeers.forEach(peer => {
              if (!peers.find(p => p.id === peer.id)) {
                peers.push(peer);
              }
            });
            
            if (!wsResolved) {
              wsResolved = true;
              clearTimeout(connectionTimeout);
            }
          } else if (data.type === 'peer_announce') {
        
            const peer = data.peer;
            if (peer.id !== userId && !peers.find(p => p.id === peer.id)) {
              const distance = peer.signal === 'strong' ? '2-5m away' : 
                              peer.signal === 'medium' ? '6-12m away' : '13-20m away';
              
              peers.push({
                id: peer.id,
                name: peer.name,
                initials: peer.initials,
                distance: peer.distance || distance,
                signal: peer.signal || 'medium',
                ip: peer.ip,
              });
            }
          } else if (data.type === 'peer_left') {
           
            const index = peers.findIndex(p => p.id === data.peerId);
            if (index >= 0) {
              peers.splice(index, 1);
            }
          } else if (data.type === 'registered') {
          
          }
        } catch (e) {
       
        }
      };


      ws.onerror = () => {
        clearTimeout(connectionTimeout);
        setWsServerStatus({ connected: false, url: wsUrl, error: 'wss://presence.paynet.cloud/' });
        if (!wsResolved) {
          wsResolved = true;
        }
    
      };

      ws.onclose = () => {
        clearTimeout(connectionTimeout);
        if (!wsResolved) {
          wsResolved = true;
        }

      };

      // Wait for response or timeout
      await new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (wsResolved || ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING) {
            clearInterval(checkInterval);
            if (ws.readyState === WebSocket.OPEN) {
              // Keep connection open for real-time updates, but we've got initial peer list
            }
            resolve();
          }
        }, 100);
        
        // Fallback timeout
        setTimeout(() => {
          clearInterval(checkInterval);
          resolve();
        }, 3000);
      });

    } catch (e) {
      // WebSocket not available - expected, will use fallback methods
      // Silently continue to alternative discovery methods
    }


    await tryAlternativeDiscovery(peers, localIPs);

    return peers;
  };


  const tryAlternativeDiscovery = async (peers, localIPs) => {

    const currentUserId = localStorage.getItem('paynet_user_id');
    

    try {
      const channel = new BroadcastChannel('paynet_discovery');
      

      const peerTimeout = new Promise((resolve) => setTimeout(resolve, 3000));
      
      channel.onmessage = (event) => {
        if (event.data.type === 'peer_announce') {
          const peer = event.data.peer;

          if (peer.id !== currentUserId && !peers.find(p => p.id === peer.id)) {
            peers.push({
              id: peer.id,
              name: peer.name,
              initials: peer.initials,
              distance: peer.distance || 'Nearby',
              signal: peer.signal || 'medium',
              ip: peer.ip,
              timestamp: Date.now(),
            });
          }
        }
      };

  
      channel.postMessage({ type: 'discover_request', localIPs });

 
      await peerTimeout;
      channel.close();
    } catch (e) {
      console.log('BroadcastChannel not available:', e);
    }

 
    try {
      const storedPeers = localStorage.getItem('paynet_peers');
      if (storedPeers) {
        try {
          const parsedPeers = JSON.parse(storedPeers);
          const now = Date.now();
  
          const activePeers = parsedPeers.filter(peer => (now - (peer.lastSeen || 0)) < 30000);
          
          activePeers.forEach((peer) => {
     
            if (peer.id !== currentUserId && !peers.find(p => p.id === peer.id)) {
           
              const distance = peer.signal === 'strong' ? '2-5m away' : 
                              peer.signal === 'medium' ? '6-12m away' : '13-20m away';
              
              peers.push({
                id: peer.id,
                name: peer.name,
                initials: peer.initials || peer.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
                distance: distance,
                signal: peer.signal || 'medium',
                ip: peer.ip,
              });
            }
          });
          
    
          localStorage.setItem('paynet_peers', JSON.stringify(activePeers));
        } catch (e) {
          console.error('Error parsing stored peers:', e);
        }
      }
    } catch (e) {
      console.error('localStorage access failed:', e);
    }


    try {

      const pc = new RTCPeerConnection({
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' }
        ]
      });

      pc.createDataChannel('discovery');
      

      const localNetworkIPs = new Set();
      pc.onicecandidate = (event) => {
        if (event.candidate) {
          const candidate = event.candidate.candidate;
          const ipMatch = candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
          if (ipMatch) {
            const ip = ipMatch[0];
            if (ip.startsWith('192.168.') || ip.startsWith('10.') || 
                ip.match(/^172\.(1[6-9]|2[0-9]|3[0-1])\./)) {
              localNetworkIPs.add(ip);
            }
          }
        }
      };

      await pc.createOffer().then(offer => pc.setLocalDescription(offer));
      

      await new Promise(resolve => setTimeout(resolve, 2000));
      

      
      pc.close();
    } catch (e) {
      console.log('WebRTC discovery failed:', e);
    }

    return peers;
  };


  useEffect(() => {

    let userId = localStorage.getItem('paynet_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('paynet_user_id', userId);
    }

 
    let userName = localStorage.getItem('paynet_user_name');
    if (!userName) {
      userName = prompt('Enter your name to appear on the network:') || `User ${userId.slice(-6)}`;
      if (userName) {
        localStorage.setItem('paynet_user_name', userName);
      }
    }

    const userInitials = userName ? userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'U' + userId.slice(-1).toUpperCase();


    let discoveryChannel = null;
    try {
      discoveryChannel = new BroadcastChannel('paynet_discovery');
      
      discoveryChannel.onmessage = (event) => {
        if (event.data.type === 'discover_request') {
        
          const peerInfo = {
            id: userId,
            name: userName || `User ${userId.slice(-6)}`,
            initials: userInitials,
            signal: 'strong',
            lastSeen: Date.now(),
          };
          
          discoveryChannel.postMessage({
            type: 'peer_announce',
            peer: peerInfo,
          });
        }
      };
    } catch (e) {
      console.log('BroadcastChannel not available for listening');
    }


    const announcePeer = () => {
      const peerInfo = {
        id: userId,
        name: userName || `User ${userId.slice(-6)}`,
        initials: userInitials,
        signal: 'strong',
        lastSeen: Date.now(),
      };


      try {
        const storedPeers = localStorage.getItem('paynet_peers');
        const peers = storedPeers ? JSON.parse(storedPeers) : [];
        const existingIndex = peers.findIndex(p => p.id === userId);
        if (existingIndex >= 0) {
          peers[existingIndex] = { ...peers[existingIndex], ...peerInfo, lastSeen: Date.now() };
        } else {
          peers.push(peerInfo);
        }
        localStorage.setItem('paynet_peers', JSON.stringify(peers));
      } catch (e) {
        console.error('Error storing peer info:', e);
      }


      if (discoveryChannel) {
        try {
          discoveryChannel.postMessage({
            type: 'peer_announce',
            peer: peerInfo,
          });
        } catch (e) {
  
        }
      }
    };


    announcePeer();
    const interval = setInterval(announcePeer, 10000);

    return () => {
      clearInterval(interval);
      if (discoveryChannel) {
        discoveryChannel.close();
      }
    };
  }, []);

  const handleSendClick = async () => {
    if (!sendAmount || parseFloat(sendAmount) <= 0) return;
    setShowSendModal(true);
    setSelectedUser(null);
    setIsSending(false);
    setSendSuccess(false);
    await scanForPeers();
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleConfirmSend = () => {
    if (!selectedUser || !sendAmount) return;
    setIsSending(true);
    setSendSuccess(false);
    

    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
    }, 2000);
  };

  const handleCloseSendModal = () => {
    setShowSendModal(false);
    setSelectedUser(null);
    setIsSending(false);
    setSendSuccess(false);
    setNearbyUsers([]);
  };

  const handleSendAnother = () => {
    setSelectedUser(null);
    setIsSending(false);
    setSendSuccess(false);
  };

  return (
    <div className="launch-shell" role="region" aria-label="Choose Amount and recipient">
      <div className="top-pill">Choose Amount and recipient</div>

      <div className="form-area">
        <div className="card" aria-hidden={false}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="label" style={{ fontSize: 14 }}>
              You Send:
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>$</div>
              <input
                className="amount"
                inputMode="decimal"
                placeholder="0.00"
                value={sendAmount}
                onChange={(e) => parseAmount(e.target.value)}
                aria-label="Amount to send"
              />
            </div>
          </div>
        </div>

        <div className="card" style={{ paddingTop: 18, paddingBottom: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            <div>
              <div className="label">User Receives:</div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginTop: 4 }}>
                ${formatCurrency(sendAmount)}
              </div>
            </div>
            <div style={{ alignSelf: "center", color: "var(--muted)", fontSize: 12 }}>
              (instant)
            </div>
          </div>
        </div>

        {sendAmount && parseFloat(sendAmount) > 0 && (
          <div className="tax-breakdown">
            <div className="tax-row">
              <div className="tax-label">Amount to send</div>
              <div className="tax-value">${formatCurrency(sendAmount)}</div>
            </div>
            <div className="tax-row">
              <div className="tax-label">
                Transaction fee
                <span className="tax-badge">2%</span>
              </div>
              <div className="tax-value">${formatCurrency(calculateTax(sendAmount))}</div>
            </div>
            <div className="tax-row">
              <div className="tax-total-label">Total Amount</div>
              <div className="tax-total-value">${formatCurrency(calculateTotal(sendAmount))}</div>
            </div>
          </div>
        )}

        <button
          className="send-btn"
          onClick={handleSendClick}
          disabled={!sendAmount || parseFloat(sendAmount) <= 0}
        >
          {sendAmount && parseFloat(sendAmount) > 0 
            ? `Send $${formatCurrency(calculateTotal(sendAmount))}`
            : 'Send Money'
          }
        </button>

        <div className="card wifi-card" style={{ background: "var(--glass)" }}>
          <div style={{ width: "100%" }}>
            <div className="tiny">Users in same Wi-Fi:</div>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.03)",
                marginTop: 8,
                paddingTop: 12,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                alignItems: "center",
              }}
            >
              <div className="no-users">No Users Found...</div>

              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <button
                  className="scan-btn primary"
                  onClick={onScanClick}
                  aria-label="Scan for users on same wifi"
                >
                  Scan Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">Tip: On mobile, allow browser to open settings when prompted.</div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
            <h3>Open Wi-Fi Settings</h3>
            </div>
            <div className="modal-body">
            <p>{modalMessage}</p>
            <div style={{ marginBottom: 8 }}>
              <strong>Quick manual steps</strong>
              <ul style={{ color: "var(--muted)", marginTop: 8 }}>
                <li>Android: Settings → Network & internet → Wi-Fi</li>
                <li>iPhone: Settings → Wi-Fi</li>
                <li>Desktop: Open your OS network settings</li>
              </ul>
            </div>
            </div>
            <div className="actions">
              <button
                className="btn"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Close
              </button>
              <button
                className="btn primary"
                onClick={() => {
                
                  setShowModal(false);
                  setTimeout(onScanClick, 200);
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {showSendModal && (
        <div className="modal-backdrop" onClick={handleCloseSendModal}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {!isSending && !sendSuccess ? (
              <>
                <div className="modal-header">
                  <h3>Send Money to Nearby Users</h3>
                  <p className="modal-subtitle">Select a recipient on the same WiFi network</p>
                </div>
                <div className="modal-body">
                  <div style={{ 
                    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    marginBottom: 16,
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span className="label" style={{ marginBottom: 0 }}>Recipient receives:</span>
                      <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>${formatCurrency(sendAmount)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <span className="label" style={{ marginBottom: 0 }}>Transaction fee:</span>
                      <span style={{ color: "var(--muted)", fontWeight: 500, fontSize: 13 }}>${formatCurrency(calculateTax(sendAmount))}</span>
                    </div>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center",
                      marginTop: 12,
                      paddingTop: 12,
                      borderTop: "1px solid rgba(255,255,255,0.05)"
                    }}>
                      <span className="label" style={{ marginBottom: 0, color: "#fff", fontWeight: 600 }}>Total amount:</span>
                      <span className="amount-badge">${formatCurrency(calculateTotal(sendAmount))}</span>
                    </div>
                  </div>
                  
                  {networkInfo && (
                    <div className="network-info">
                      <strong>Network:</strong>
                      {networkInfo.type !== 'unknown' ? networkInfo.type.toUpperCase() : 'WiFi'} 
                      {networkInfo.effectiveType !== 'unknown' && ` • ${networkInfo.effectiveType}`}
                    </div>
                  )}

                  {(wsServerStatus || detectedServerIPs.length > 0) && (
                    <div className={`server-status ${wsServerStatus?.connected ? 'connected' : 'disconnected'}`}>
                      <strong>
                        {wsServerStatus?.connected ? '✅ Server Connected' : '🔌 Discovery Server'}
                      </strong>
                      {wsServerStatus?.connected && wsServerStatus.url && (
                        <div>
                          <span className="server-url">{wsServerStatus.url}</span>
                        </div>
                      )}
                      {detectedServerIPs.length > 0 && (
                        <div className="server-ips">
                          <div style={{ marginBottom: 6, fontSize: 11, color: 'var(--muted)' }}>Available endpoints:</div>
                          <div>
                            <span className="server-ip-item">wss://presence.paynet.cloud/</span>
                            {detectedServerIPs.map((ip, idx) => (
                              <span key={idx} className="server-ip-item">ws://{ip}:8080/</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {wsServerStatus?.error && (
                        <div style={{ marginTop: 8, fontSize: 11, color: 'var(--muted)' }}>
                          {wsServerStatus.error} - Using fallback discovery
                        </div>
                      )}
                    </div>
                  )}

                  {isScanning ? (
                    <div className="scanning-state">
                      <div className="scanning-icon">
                        <div className="scanning-pulse"></div>
                        <div className="spinner" style={{ position: "relative", zIndex: 1 }}></div>
                      </div>
                      <div className="sending-title">Scanning for nearby users...</div>
                      <div className="sending-message">Looking for devices on the same WiFi network</div>
                      <div className="scanning-dots">
                        <div className="scanning-dot"></div>
                        <div className="scanning-dot"></div>
                        <div className="scanning-dot"></div>
                      </div>
                    </div>
                  ) : nearbyUsers.length > 0 ? (
                    <div className="user-list">
                      {nearbyUsers.map((user) => (
                        <div
                          key={user.id}
                          className={`user-item ${selectedUser?.id === user.id ? "selected" : ""}`}
                          onClick={() => handleUserSelect(user)}
                        >
                          <div className="user-avatar">{user.initials}</div>
                          <div className="user-info">
                            <div className="user-name">{user.name}</div>
                            <div className="user-details">
                              <span className="wifi-indicator">
                                <svg className="wifi-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M5 12.55a11 11 0 0 1 14.08 0" opacity={user.signal === "strong" ? 1 : user.signal === "medium" ? 0.6 : 0.3} />
                                  <path d="M1.42 9a16 16 0 0 1 21.16 0" opacity={user.signal === "strong" ? 1 : 0.3} />
                                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" opacity={user.signal === "strong" ? 1 : user.signal === "medium" ? 0.6 : 0.3} />
                                  <line x1="12" y1="20" x2="12.01" y2="20" opacity={user.signal === "strong" ? 1 : 0.3} />
                                </svg>
                                {user.signal === "strong" ? "Strong" : user.signal === "medium" ? "Medium" : "Weak"} signal
                              </span>
                              <span>•</span>
                              <span>{user.distance}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-users-found">
                      <div className="no-users-icon">📡</div>
                      <div className="sending-title" style={{ marginBottom: 8 }}>No Users Found</div>
                      <div className="sending-message">
                        No other users detected on your WiFi network. Make sure other users have the app open on the same network.
                      </div>
                      <button 
                        className="btn primary" 
                        onClick={scanForPeers}
                        style={{ marginTop: 20, width: "100%" }}
                      >
                        Scan Again
                      </button>
                    </div>
                  )}
                </div>
                {!isScanning && nearbyUsers.length > 0 && (
                  <div className="actions">
                    <button className="btn" onClick={handleCloseSendModal}>
                      Cancel
                    </button>
                    <button
                      className="btn primary"
                      onClick={handleConfirmSend}
                      disabled={!selectedUser}
                    >
                      Send ${formatCurrency(calculateTotal(sendAmount))}
                    </button>
                  </div>
                )}
                {!isScanning && nearbyUsers.length === 0 && (
                  <div className="actions">
                    <button className="btn" onClick={handleCloseSendModal} style={{ width: "100%" }}>
                      Close
                    </button>
                  </div>
                )}
              </>
            ) : isSending ? (
              <div className="modal-body">
                <div className="sending-state">
                  <div className="sending-icon">
                    <div className="spinner"></div>
                  </div>
                  <div className="sending-title">Sending Payment...</div>
                  <div className="sending-message">
                    Transferring ${formatCurrency(calculateTotal(sendAmount))} to {selectedUser?.name}
                    <div style={{ fontSize: 12, marginTop: 4, opacity: 0.8 }}>
                      (Recipient receives: ${formatCurrency(sendAmount)})
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-body">
                <div className="sending-state">
                  <div className="sending-icon">
                    <div className="success-icon">✓</div>
                  </div>
                  <div className="sending-title">Payment Sent!</div>
                  <div className="sending-message">
                    ${formatCurrency(calculateTotal(sendAmount))} has been successfully sent to {selectedUser?.name}
                    <div style={{ fontSize: 12, marginTop: 4, opacity: 0.8 }}>
                      (Recipient received: ${formatCurrency(sendAmount)})
                    </div>
                  </div>
                  <div style={{ marginTop: 24 }}>
                    <button className="btn primary" onClick={handleSendAnother} style={{ width: "100%" }}>
                      Send Another Payment
                    </button>
                    <button className="btn" onClick={handleCloseSendModal} style={{ width: "100%", marginTop: 12 }}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
