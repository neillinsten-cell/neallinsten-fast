import { useState } from 'react'
const videos=[
 {id:1,txt:"my first time seeing a mythical water spirit 🐍😳",user:"Beauty Mazibuko",likes:"93.6K",com:"3.8K",save:"7.8K",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"},
 {id:2,txt:"Drone caught spirit at Fundudzi 🔥",user:"XK1 Drone",likes:"112K",com:"4.2K",save:"9K",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
 {id:3,txt:"Madi a u thusa a na zwidali - Lake Fundudzi",user:"Makhulu",likes:"67K",com:"2K",save:"5K",src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"},
]
export default function App(){
 const [tab,setTab]=useState('home')
 const [like,setLike]=useState({})
 const [follow,setFollow]=useState({})

 if(tab==='inbox'){
  return(
   <div style={{height:'100vh',background:'#ededed',fontFamily:'sans-serif'}}>
    <div style={{padding:15,background:'white',fontWeight:'bold',fontSize:18}}>ZAKA-X Chat 💬</div>
    <div style={{background:'white',marginTop:2}}>
     <div style={{padding:14,borderBottom:'1px solid #eee',display:'flex',justifyContent:'space-between'}}><span><b>Makhulu</b><br/>Ndaa vho vuwa hani?</span><span style={{color:'green'}}>● 3 new</span></div>
     <div style={{padding:14,borderBottom:'1px solid #eee'}}><b>Beauty</b><br/>Sent a video - Fundudzi</div>
     <div style={{padding:14}}><b>Venda Market Group</b> - 12 new messages</div>
    </div>
    <div style={{position:'absolute',bottom:0,width:'100%',height:50,background:'white',display:'flex',justifyContent:'space-around',alignItems:'center',borderTop:'1px solid #ddd'}}>
     <span onClick={()=>setTab('home')} style={{color:'#888'}}>Home</span><span style={{color:'#888'}}>Explore</span><span style={{background:'black',color:'white',padding:'4px 12px',borderRadius:8}}>+</span><span style={{color:'#07c160',fontWeight:800}}>Inbox</span><span onClick={()=>setTab('me')} style={{color:'#888'}}>Me</span>
    </div>
   </div>
  )
 }
 if(tab==='me'){
  return(
   <div style={{height:'100vh',background:'#f0f2f5',fontFamily:'sans-serif',paddingBottom:60}}>
    <div style={{background:'white',padding:20,textAlign:'center'}}><div style={{width:70,height:70,background:'#fe2c55',borderRadius:'50%',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontSize:30}}>B</div><div style={{marginTop:10,fontWeight:800,fontSize:18}}>Beauty Mazibuko</div><div style={{color:'#888'}}>Thulamela, Limpopo - 12.3K followers</div><button onClick={()=>setFollow({})} style={{marginTop:10,background:follow['me']?'#eee':'#fe2c55',color:follow['me']?'#000':'#fff',border:'none',padding:'6px 20px',borderRadius:20,fontWeight:800}}>{follow['me']?'Following':'Follow'}</button></div>
    <div style={{background:'white',marginTop:8,padding:15,display:'grid',gridTemplateColumns:'repeat(4,1fr)',textAlign:'center',gap:10}}>
     <div><div style={{fontSize:22}}>💳</div>Pay</div><div><div style={{fontSize:22}}>🛒</div>Market</div><div><div style={{fontSize:22}}>📺</div>Live</div><div><div style={{fontSize:22}}>👛</div>Wallet</div>
    </div>
    <div style={{background:'white',marginTop:8,padding:12,fontSize:13,color:'#666',textAlign:'center'}}>✅ App Installed! Now on your Home Screen</div>
    <div style={{position:'absolute',bottom:0,width:'100%',height:50,background:'white',display:'flex',justifyContent:'space-around',alignItems:'center',borderTop:'1px solid #ddd'}}>
     <span onClick={()=>setTab('home')} style={{color:'#888'}}>Home</span><span style={{color:'#888'}}>Explore</span><span>+</span><span onClick={()=>setTab('inbox')} style={{color:'#888'}}>Inbox</span><span style={{fontWeight:800}}>Me</span>
    </div>
   </div>
  )
 }
 return(
  <div style={{background:'black',height:'100vh',width:'100vw',position:'fixed',top:0,left:0,fontFamily:'sans-serif'}}>
   <div style={{position:'absolute',top:0,width:'100%',zIndex:20,textAlign:'center',padding:12,color:'white',display:'flex',justifyContent:'center',gap:20,background:'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)'}}>
    <span style={{color:'#aaa'}}>Following</span><span style={{color:'#aaa'}}>Friends</span><span style={{fontWeight:800,borderBottom:'2px solid white'}}>For You</span>
   </div>
   <div style={{height:'100vh',overflowY:'scroll',scrollSnapType:'y mandatory'}}>
    {videos.map(v=>(
     <div key={v.id} style={{height:'100vh',scrollSnapAlign:'start',position:'relative'}}>
      <video src={v.src} autoPlay muted loop playsInline style={{width:'100%',height:'100%',objectFit:'cover'}} />
      <div style={{position:'absolute',top:'18%',left:'5%',right:'15%',background:'white',color:'black',padding:10,borderRadius:8,fontWeight:800}}>{v.txt}</div>
      <div style={{position:'absolute',right:12,bottom:90,textAlign:'center',color:'white'}}>
       <div style={{width:48,height:48,borderRadius:'50%',background:'white',border:'2px solid white',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'center',color:'black',fontWeight:800}}>{v.user[0]}</div>
       <button onClick={()=>setFollow({...follow,[v.id]:!follow[v.id]})} style={{background:follow[v.id]?'white':'#fe2c55',color:follow[v.id]?'black':'white',border:'none',borderRadius:12,padding:'2px 8px',fontSize:10,marginTop:-8,fontWeight:800}}>{follow[v.id]?'✓':' + '}</button>
       <div onClick={()=>setLike({...like,[v.id]:!like[v.id]})} style={{marginTop:15}}><div style={{fontSize:32,color:like[v.id]?'#fe2c55':'white'}}>♥</div><div style={{fontSize:12,fontWeight:700}}>{v.likes}</div></div>
       <div style={{marginTop:12}}><div style={{fontSize:22}}>💬</div><div style={{fontSize:12}}>{v.com}</div></div>
       <div style={{marginTop:12}}><div style={{fontSize:22}}>🔖</div><div style={{fontSize:12}}>{v.save}</div></div>
       <div style={{marginTop:12}}><div style={{fontSize:18,background:'white',borderRadius:20,width:32,height:32,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto'}}>↗</div><div style={{fontSize:10}}>Share</div></div>
      </div>
      <div style={{position:'absolute',left:10,bottom:85,color:'white'}}><b>@{v.user}</b><div style={{fontSize:13}}>mythical water spirit #Venda #Fundudzi</div><div style={{fontSize:13}}>♫ original sound - Beauty</div></div>
     </div>
    ))}
   </div>
   <div style={{position:'absolute',bottom:0,left:0,right:0,height:50,background:'black',display:'flex',justifyContent:'space-around',alignItems:'center',color:'white',borderTop:'1px solid #222'}}>
    <span style={{fontWeight:800}}>Home</span><span style={{color:'#888'}} onClick={()=>setTab('me')}>Explore</span><span style={{background:'white',color:'black',padding:'2px 10px',borderRadius:6,fontWeight:900}}>+</span><span style={{color:'#888'}} onClick={()=>setTab('inbox')}>Inbox</span><span style={{color:'#888'}} onClick={()=>setTab('me')}>Me</span>
   </div>
  </div>
 )
}
