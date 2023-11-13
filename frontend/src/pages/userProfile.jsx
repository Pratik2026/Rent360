import { Button } from "keep-react";
import { EmptyComponent } from "../components/emptyresult.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";
import { ProfileCard } from "../components/profileCard.jsx";

const userProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-40 my-20 flex  items-center gap-4 ">
        <ProfileCard />
        <div className="display_box flex flex-col justify-center items-center w-full">
            <EmptyComponent />
            <Button size="md" href="/sellform" color="info">Start Selling</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default userProfile;
