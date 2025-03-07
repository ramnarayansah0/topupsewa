export default function Footer(){
    
    return(
        <>
       
       <footer className="bg-blue-400 mt-7 py-6">
  <div className="container mx-auto  px-6 flex flex-col items-center">
    <h1 className="text-white text-4xl font-semibold mb-4">Follow Us</h1>
    <div className="flex space-x-6">
        <a href="https://www.facebook.com/profile.php?id=61573654779653" target="_blank"> 
        <img className="w-20"  src="/facebook.png"></img>
        </a>
        <a href="https://wa.link/n5cbbq" target="_blank"> 
        <img className="w-20"  src="/whatsapp.png"></img>
        </a>
        <a href="https://www.youtube.com/@Topupsewa" target="_blank"> 
        <img className="w-20"  src="/youtube.png"></img>
        </a>
      
    </div>
  </div>
</footer>
        </>
    )
}