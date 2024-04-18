import Phone from "../Phone/Phone";

const Installation = () => {
  return (
    <>
      <section id="call" className="py-24 bg-black installation">
        <div className="container mx-auto px-3.5">
          <div className="border wqpper p-7 rounded-3xl">
            <h3 className="mb-10 text-4xl text-center text-blue-400">
              Appliance installation
            </h3>
            <p className="mb-10 text-xl text-center text-blue-400">
              Trans Global Service will install all appliances in your home. We
              install both gas and electric appliances, new installations, or we
              can remove and replace. We offer delivery and haul away service on
              some items, as well as estimates on customer work. Our installers
              are bonded and professional and are the expert you need to get the
              job done right. Backed by a 1 year warranty against workmanship on
              your install, we have you covered.
            </p>
            <Phone />
          </div>
        </div>
      </section>
    </>
  );
};

export default Installation;
