import { useState } from 'react'
const videos=[
{id:1,txt:"my first time seeing a mythical water spirit at #Venda #Fundudzi",color:"#1a2a3a"},
{id:2,txt:"Drone caught spirit at Fundudzi #Venda",color:"#2a1a3a"},
{id:3,txt:"Madi a u thusa a na zwidali - Langa",color:"#3a2a1a"},
]
export default function App(){
 const [tab,setTab]=useState('home')
 const [like,setLike]=useState({})
 const [follow,setFollow]=useState({})
 const Nav=()=>(
  <div style={{position:'absolute',bottom:0,left:0,right:0,height:50,background:'black',display:'flex',justifyContent:'space-around',alignItems:'center',color:'white',borderTop:'1px solid #222',zIndex:10}}>
   <span onClick={()=>setTab('home')} style={{color:tab==='home'?'white':'#888',fontWeight:tab==='home'?800:400,cursor:'pointer'}}>Home</span>
   <span onClick={()=>setTab('explore')} style={{color:tab==='explore'?'white':'#888',fontWeight:tab==='explore'?800:400,cursor:'pointer'}}>Explore</span>
   <span onClick={()=>alert('Upload coming soon!')} style={{background:'white',color:'black',padding:'2px 12px',borderRadius:6,fontWeight:900,cursor:'pointer'}}>+</span>
   <span onClick={()=>setTab('inbox')} style={{color:tab==='inbox'?'white':'#888',fontWeight:tab==='inbox'?800:400,cursor:'pointer'}}>Inbox</span>
   <span onClick={()=>setTab('me')} style={{color:tab==='me'?'white':'#888',fontWeight:tab==='me'?800:400,cursor:'pointer'}}>Me</span>
  </div>
 )
 if(tab==='inbox'){
  return(<div style={{height:'100vh',background:'#000',color:'white'}}><div style={{padding:15,background:'white',color:'black',fontWeight:800}}>Inbox</div><div style={{background:'white',color:'black',marginTop:1}}><div style={{padding:14,borderBottom:'1px solid #eee'}}>🔔 New follower: @VendaCulture</div><div style={{padding:14,borderBottom:'1px solid #eee'}}>❤️ @LimpopoQueen liked your video</div><div style={{padding:14}}><b>Venda Market</b> - New spirits content</div></div><Nav/></div>)
 }
 if(tab==='explore'){
  return(<div style={{height:'100vh',background:'#000',color:'white'}}><div style={{padding:15,fontWeight:800}}>Explore #Venda</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:2}}><div style={{height:120,background:'#222',display:'flex',alignItems:'center',justifyContent:'center'}}>Lake</div><div style={{height:120,background:'#333',display:'flex',alignItems:'center',justifyContent:'center'}}>Spirit</div><div style={{height:120,background:'#444',display:'flex',alignItems:'center',justifyContent:'center'}}>Dance</div><div style={{height:120,background:'#444',display:'flex',alignItems:'center',justifyContent:'center'}}>Culture</div><div style={{height:120,background:'#222',display:'flex',alignItems:'center',justifyContent:'center'}}>Phungula</div><div style={{height:120,background:'#333',display:'flex',alignItems:'center',justifyContent:'center'}}>Mukula</div></div><Nav/></div>)
 }
 if(tab==='me'){
  return(<div style={{height:'100vh',background:'#fff',color:'black'}}><div style={{padding:20,textAlign:'center'}}><div style={{width:80,height:80,background:'#000',borderRadius:40,margin:'0 auto',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30}}>N</div><div style={{fontWeight:800,marginTop:10}}>@neallinsten</div><div style={{color:'#666'}}>Venda Spirit Hunter</div><div style={{display:'flex',justifyContent:'space-around',marginTop:20}}><div><b>12</b><br/>Videos</div><div><b>4.5k</b><br/>Followers</div><div><b>230</b><br/>Following</div></div></div><Nav/></div>)
 }
 return(
  <div style={{height:'100vh',background:'black',color:'white',overflow:'hidden',position:'relative'}}>
   <div style={{height:'100vh',overflowY:'scroll',scrollSnapType:'y mandatory'}}>
   {videos.map(v=>(
    <div key={v.id} style={{height:'100vh',position:'relative',scrollSnapAlign:'start',background:v.color,display:'flex',alignItems:'flex-end',padding:15}}>
     <div style={{flex:1,paddingBottom:50}}>
      <div style={{fontWeight:700}}>@neallinsten</div>
      <div style={{fontSize:13,marginTop:5}}>{v.txt}</div>
      <div style={{fontSize:13,marginTop:5}}>♫ original sound - Beauty</div>
     </div>
     <div style={{width:60,textAlign:'center',paddingBottom:50}}>
      <div style={{marginBottom:15,cursor:'pointer'}} onClick={()=>setFollow(f=>({...f,[v.id]:!f[v.id]}))}><div style={{width:40,height:40,background:'#fff',borderRadius:20,margin:'0 auto'}}></div><div style={{background:follow[v.id]?'#888':'red',borderRadius:10,fontSize:10,marginTop:-8,position:'relative'}}>{follow[v.id]?'✓':'++'}</div></div>
      <div style={{marginBottom:15,cursor:'pointer'}} onClick={()=>setLike(l=>({...l,[v.id]:!l[v.id]}))}><div style={{fontSize:28}}>{like[v.id]?'❤️':'🤍'}</div><div style={{fontSize:12}}>{like[v.id]?'12.5k':'12.4k'}</div></div>
      <div style={{marginBottom:15}}><div style={{fontSize:28}}>💬</div><div style={{fontSize:12}}>342</div></div>
      <div style={{marginBottom:15}}><div style={{fontSize:28}}>↗️</div><div style={{fontSize:12}}>Share</div></div>
     </div>
    </div>
   ))}
   </div>
   <Nav/>
  </div>
 )
}
