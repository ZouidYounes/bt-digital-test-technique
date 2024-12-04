import { Container, Title } from "@trilogy-ds/react";

// Register Swiper modules
interface OutlineBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  backgroundLight?: boolean;
}

const OutlineBox: React.FC<OutlineBoxProps> = ({ title, children, className, backgroundLight }) => {
  return (
    <Container
      className={`md:px-0 pt-32 p-8 md:pt-10 pb-2 relative border-2 ${backgroundLight ? "border-test-blue" : "border-test-grey"} rounded-lg ${className}`}

    >
      {/* Title breaking the outline */}
      <Title inverted
        level={4}
        className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${backgroundLight ? "bg-test-grey" : "bg-test-blue"
          } px-2 md:px-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold w-auto  text-center`}
      >
        {title}
      </Title>



      {/* Swiper inside the box */}
      <Container className="md:p-6 md:pt-10">
        {children}
      </Container>
    </Container>
  );
};

export default OutlineBox;
