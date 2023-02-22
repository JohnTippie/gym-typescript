import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit tortor non odio fermentum, ut.",
  },
  {
    icon: <UserGroupIcon className="h6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus, risus ac aliquet dignissim, nibh",
  },
  {
    icon: <AcademicCapIcon className="h6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis quam vel tortor aliquet convallis.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, tranier and classes to get
            you to your ultimate fitness goals with ease. We provide true care
            into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nulla libero ligula, congue ac sem non, imperdiet sagittis arcu.
                Sed ac rutrum tellus. Pellentesque ac ex at neque rutrum
                venenatis. Pellentesque aliquet elit sed elementum dictum. Donec
                ac dui luctus, consectetur ante in, hendrerit lorem. Praesent
                leo nibh, rhoncus a lacinia sit amet, luctus sodales dui.
                Praesent volutpat nulla vitae odio lacinia sollicitudin. Aenean
                venenatis felis tellus, aliquam lobortis nibh consequat ut.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent porta tortor euismod
                volutpat pellentesque.
              </p>
              <p className="mb-5">
                Proin eleifend sem sit amet diam varius, nec elementum mauris
                imperdiet. Aenean elementum ut mi eu pulvinar. Morbi sagittis
                magna a augue faucibus ullamcorper. In sollicitudin ultricies
                diam, quis viverra felis ornare eget. Maecenas quis erat
                consectetur, rhoncus ante eget, volutpat justo. Fusce mattis
                tempus fermentum. Curabitur condimentum turpis nec ipsum euismod
                imperdiet. Nunc euismod porttitor justo condimentum iaculis.
                Nunc et ante nunc. Mauris sit amet feugiat nulla. Aliquam eu
                enim at magna rhoncus convallis sit amet vitae nibh. In accumsan
                tempus lorem eu aliquet. Fusce finibus, velit vel mollis
                viverra, eros turpis pulvinar enim, ullamcorper venenatis risus
                diam vel libero. Nam at augue id quam bibendum vestibulum in
                egestas leo. Vivamus quis nulla non nisi ullamcorper aliquet.
                Aliquam vitae suscipit ligula.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
