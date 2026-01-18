import Header from "@/src/components/Layout/Header";
import AdvanceSection from "@/src/components/Home/AdvanceSection";
import ChooseSection from "@/src/components/Home/ChooseSection";
import PackageCardInfo from "@/src/components/Home/PackageCardInfo";
import Footer from "@/src/components/Layout/Footer";

export default function Home() {
  return (
    <div>
       <Header />
       <AdvanceSection />
       <ChooseSection />
       <PackageCardInfo />
       <Footer /> 
    </div>
  );
}
