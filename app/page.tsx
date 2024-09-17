// app/page.tsx or pages/index.tsx (depending on your Next.js version)

import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Dedicated from './components/Dedicated/index';
import Manage from './components/Manage/index';
import FAQ from './components/FAQ/index';
import Testimonials from './components/Testimonials/index';
import Wework from './components/Wework/index';
import SimpleWhatsAppWidget from './components/SimpleWhatsAppWidget/index';


export default function Home() {
  return (
    <main>
          <SimpleWhatsAppWidget 
        phoneNumber="31 6 24429201"
        message="Hello! I have a question about your services."
      />
     
      <Banner />

     
      <Aboutus />
      <Testimonials />
      <Manage />
      <Dedicated />
 

      <FAQ />
      <Wework />
     
   
    </main>
  );
}
