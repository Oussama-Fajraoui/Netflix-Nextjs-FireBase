import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMedium,
    AiOutlineTwitter,
  } from "react-icons/ai";
  
  const Footer = () => {
    return (
      <div className="text-center text-xxl pb-8">
        <span className="font-bold">Captain Price</span> | ©{" "}
        {new Date().getFullYear()}
        <div>
          <p className="flex justify-center pt-4 gap-4">
            <a href="https://github.com/murathudavendigar" target="blank">
              <AiOutlineGithub className="h-7 w-7 socialLogo" />
            </a>
            <a href="https://twitter.com/murathoncu" target="blank">
              <AiOutlineTwitter className="h-7 w-7 socialLogo" />
            </a>
            <a
              href="https://www.linkedin.com/in/murathudavendigaroncu/"
              target="blank">
              <AiOutlineLinkedin className="h-7 w-7 socialLogo" />
            </a>
            <a href="https://instagram.com/m_hdavendigr" target="blank">
              <AiOutlineInstagram className="h-7 w-7 socialLogo" />
            </a>
            <a href="https://medium.com/@murathoncu" target="blank">
              <AiOutlineMedium className="h-7 w-7 socialLogo" />
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;