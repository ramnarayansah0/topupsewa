export default function Footer(){
    
    return(
        <>
       
       <footer className="bg-blue-400 dark:bg-blue-900 mt-7 py-6">
  <div className="container mx-auto  px-6 flex flex-col items-center">
    <h1 className="text-white dark:text-gray-100 text-4xl font-semibold mb-4">Follow Us</h1>
    <div className="flex space-x-6">
        <a href="https://www.facebook.com/profile.php?id=61573654779653" target="_blank" rel="noopener noreferrer"> 
        <img className="w-20"  src="/facebook.png" alt="Facebook"></img>
        </a>
        <a href="https://wa.link/n5cbbq" target="_blank" rel="noopener noreferrer"> 
        <img className="w-20"  src="/whatsapp.png" alt="WhatsApp"></img>
        </a>
        <a href="https://www.youtube.com/@Topupsewa" target="_blank" rel="noopener noreferrer"> 
        <img className="w-20"  src="/youtube.png" alt="YouTube"></img>
        </a>
      
    </div>
  </div>
</footer>
        </>
    )
}