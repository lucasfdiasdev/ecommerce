import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";
import MainLayout from "@/components/layout/main-layout";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <MainLayout>
      <Breadcrumb title="Contact Us" />
      <div className="py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.7298705808157!2d-34.88546689044033!3d-8.02676409196649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18684b0f7557%3A0xb9eca2d7b5cafd8a!2sR.%20Francisco%20Berenguer%2C%20737%20-%20Campo%20Grande%2C%20Recife%20-%20PE%2C%2052040-070!5e0!3m2!1spt-BR!2sbr!4v1708096559302!5m2!1spt-BR!2sbr"
          width="600"
          height="300"
          className="border-0 w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex items-center justify-center py-5 mx-auto max-w-[900px]">
          <Card className="w-full">
            <CardContent className="flex items-start py-5 gap-5">
              <div className="flex-1">
                <div className="aspect-auto">
                  <Image
                    width={400}
                    height={200}
                    src={"/store.jpg"}
                    alt="Loja de recife"
                    className="object-contain object-center rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div>ola</div>
                <div>ola</div>
                <div>ola</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
