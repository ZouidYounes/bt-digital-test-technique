/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Box, BoxContent, Breadcrumb, BreadcrumbItem, Button, Columns, Column, Container, Link, Row, Rows, Section, Text, Title, TitleLevels, Card, CardImage, CardContent, Tab, Tabs, TabList } from "@trilogy-ds/react";
import Image from "next/image";
import OutlineBox from "../ui/OutlineBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GapSize } from "@trilogy-ds/react/lib/components/columns/ColumnsTypes";
import "../globals.css";
import { useEffect, useRef, useState } from "react";




export default function TestPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    // Scroll to a section when a tab is clicked
    const handleTabClick = (index: number) => {
        const targetSection = sectionRefs.current[index];
        if (targetSection) {
            const offset = targetSection.offsetTop;
            window.scrollTo({
                top: offset - 60,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Section 1 - Simple Section Done with Columns */}
            <Section backgroundColor="MAIN" >
                <Container medium className="flex justify-center items-center" >
                    <Columns>
                        <Column verticalAlign="ALIGNED_CENTER" className=" text-center md:text-left">
                            <Title level={2} inverted>Réparation de votre téléphone</Title>
                            <Text inverted>Un smartphone cassé ou en panne, ça arrive à tout le monde.</Text>
                            <Text inverted>Heureusement, que vous soyez sous garantie ou non, on a des <span className="font-bold">solutions de réparation</span> pour vous !</Text>
                        </Column>
                        <Column>
                            <Image alt="" src={"/image1.webp"} width={548} height={340} className="rounded-lg" />
                        </Column>
                    </Columns>
                </Container>

            </Section>
            {/* <div className="hidden lg:block bg-white">
                    <Tabs>
                        <TabList>
                            <Tab label="Wefix" onClick={() => handleTabClick(0)} />
                            <Tab label="Réparation express en boutique" onClick={() => handleTabClick(1)} />
                            <Tab label="Avantages client" onClick={() => handleTabClick(2)} />
                            <Tab label="Forfaits" onClick={() => handleTabClick(3)} />
                            <Tab label="L’assurance" onClick={() => handleTabClick(4)} />
                            <Tab label="Une question ?" onClick={() => handleTabClick(5)} />
                        </TabList>
                    </Tabs>
                </div> */}

            <div className="sticky top-0 z-50 bg-white hidden md:block">
                <Tabs>
                    <TabList>
                        <Tab label="Wefix" onClick={() => handleTabClick(0)} />
                        <Tab label="Réparation express en boutique" onClick={() => handleTabClick(1)} />
                        <Tab label="Avantages client" onClick={() => handleTabClick(2)} />
                        <Tab label="Forfaits" onClick={() => handleTabClick(3)} />
                        <Tab label="L’assurance" onClick={() => handleTabClick(5)} />
                        <Tab label="Une question ?" onClick={() => handleTabClick(8)} />
                    </TabList>
                </Tabs>
            </div>

            {/* Section 2 - Combination of Rows and Columns */}
            <div ref={(el) => {
                sectionRefs.current[0] = el
            }}>
                <Section backgroundColor="DISABLED_FADE">
                    <Container medium className="flex justify-center items-center" >
                        <Rows >
                            <Row className="text-center">
                                <Title level={3}>Le choix d’un partenaire expert pour votre téléphone</Title>
                            </Row>
                            <Row>
                                <Columns className="w-full">
                                    <Column>
                                        <Image alt="" src={"/image2.webp"} width={555} height={340} className="rounded-lg object-cover" />
                                    </Column>
                                    <Column verticalAlign="ALIGNED_CENTER" className="flex flex-col justify-center">
                                        <Title level={4}>WeFix, filiale de Fnac Darty, est le leader français
                                            de la réparation de smartphones</Title>
                                        <Text>Quelle que soit la réparation, WeFix a la solution : écran, batterie,
                                            WiFi, haut-parleur, écouteurs, appareil photo, connecteur de charge, avec des pièces compatibles.</Text>
                                        <a href="https://www.wefix.com" target="_blank" rel="noopener noreferrer">
                                            <Text className="text-blue-500 hover:text-blue-700 cursor-pointer">
                                                Visiter WeFix
                                            </Text>
                                        </a>
                                    </Column>

                                </Columns>
                            </Row>
                        </Rows>

                    </Container>
                </Section>

            </div>

            {/* Section 3 - Custom Component and Swiper */}
            <div ref={(el) => {
                sectionRefs.current[1] = el
            }}>
                <Section backgroundColor="MAIN" className="bg-test-blue text-white">
                    <Container medium className="flex justify-center items-center mx-auto max-w-screen-lg">
                        <Rows className="flex justify-center items-center container">
                            <Row className="flex justify-center items-center">
                                <Image
                                    src="/icons/repair.svg"
                                    alt=" "
                                    className="rounded-lg w-20 h-20"  // Make icon responsive with Tailwind classes
                                    height={50}
                                    width={50}
                                />
                            </Row>
                            <Row className="flex text-center">
                                <Title inverted level={3}>
                                    Bénéficiez du service de réparation express en boutique*
                                </Title>
                            </Row>
                            <Row className="flex text-center">
                                <Button variant="SECONDARY">Trouver ma boutique</Button>
                            </Row>
                            <Row className="my-4 w-full">
                                {/* I created a Custom Component and used it her as a container for the swiper */}
                                <OutlineBox title="Avec Bouygues Telecom, la réparation c’est…" className="mt-6 w-full flex flex-wrap">
                                    <Swiper
                                        modules={[Pagination]}
                                        style={{ maxWidth: '100%' }}
                                        pagination={{ clickable: true }}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        breakpoints={{
                                            0: { slidesPerView: 1 },
                                            640: { slidesPerView: 2 },   // 2 slides for tablets
                                            1024: { slidesPerView: 4 },  // 4 slides for desktops
                                        }}
                                        className="w-full swiper-container ml-0 pl-0 relative -top-5"
                                        loop={true}
                                    >
                                        {/* I enrobed divs (for easier control) in SwiperSlides so they would act as slides */}
                                        <SwiperSlide className="flex justify-center items-center w-full">
                                            <Container className="flex justify-center items-center w-full">
                                                <Rows className="items-center w-full text-center break-words">
                                                    <Row>
                                                        <Image
                                                            src="/icons/users.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title inverted level={4}>Ouvert à tous</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text inverted>Que vous soyez client Bouygues Telecom ou non !</Text>
                                                    </Row>
                                                </Rows>
                                            </Container>
                                        </SwiperSlide>

                                        <SwiperSlide className="flex justify-center items-center w-full">
                                            <Container className="flex justify-center items-center w-full">
                                                <Rows className="items-center w-full text-center break-words">
                                                    <Row>
                                                        <Image
                                                            src="/icons/france.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title inverted level={4}>Partout en France</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text inverted>Le service est accessible dans toutes nos boutiques</Text>
                                                    </Row>
                                                </Rows>
                                            </Container>
                                        </SwiperSlide>

                                        <SwiperSlide className="flex justify-center items-center w-full">
                                            <Container className="flex justify-center items-center w-full">
                                                <Rows className="items-center w-full text-center break-words">
                                                    <Row>
                                                        <Image
                                                            src="/icons/calendar.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title inverted level={4}>Express</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text inverted>
                                                            Entre 1 et 5 jours, et pour près d’un client sur 2, la réparation est réalisée en 24h !
                                                        </Text>
                                                    </Row>
                                                </Rows>
                                            </Container>
                                        </SwiperSlide>

                                        <SwiperSlide className="flex justify-center items-center w-full">
                                            <Container className="flex justify-center items-center w-full">
                                                <Rows className="items-center w-full text-center break-words">
                                                    <Row>
                                                        <Image
                                                            src="/icons/repair_green.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 sm:w-14 sm:h-14 md:w-12 md:h-12"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title inverted level={4}>Garantie de qualité</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text inverted>
                                                            Réparation réalisée par notre partenaire WiFix et garantie 1 an (i)
                                                        </Text>
                                                    </Row>
                                                </Rows>
                                            </Container>
                                        </SwiperSlide>

                                    </Swiper>
                                </OutlineBox>

                            </Row>
                            <Row>
                                <Text inverted>
                                    * Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.
                                </Text>
                            </Row>
                        </Rows>
                    </Container>
                </Section>
            </div>
            {/* Section 4 - Introduction of Boxes */}
            <div ref={(el) => {
                sectionRefs.current[2] = el
            }}>
                <Section backgroundColor="DISABLED_FADE">
                    <Container className="flex justify-center items-center mx-auto max-w-screen-lg" >
                        <Rows>
                            <Row className="text-center">
                                <Title>Et encore plus d’avantages si vous êtes client Bouygues Telecom !</Title>
                            </Row>
                            <Row>
                                {/* I used multiline + size 4 for all 3 Columns so they would be equal in size */}
                                <Columns multiline>
                                    <Column size={4}>
                                        <Box fullheight>
                                            <BoxContent>
                                                <Rows className=" flex items-center justify-center content-center text-center">
                                                    <Row>
                                                        <Image
                                                            src="/icons/euro_sun.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> -30% de remise* valables
                                                            sur toutes les réparations </Title>
                                                    </Row>
                                                    <Row>
                                                        <Text> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                    <Column size={4}>
                                        <Box fullheight>
                                            <BoxContent>
                                                <Rows className=" flex items-center justify-center content-center text-center">
                                                    <Row>
                                                        <Image
                                                            src="/icons/phone.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> On vous prête
                                                            un smartphone</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text> le temps de la réparation (i) </Text>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                    <Column size={4}>
                                        <Box fullheight backgroundColor="MAIN_FADE">
                                            <BoxContent>
                                                <Rows className=" flex items-center justify-center content-center text-center">
                                                    <Row>
                                                        <Image
                                                            src="/icons/users_blue.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16"
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> Faites profiter de la remise
                                                            de 30% à un proche, </Title>
                                                    </Row>
                                                    <Row>
                                                        <Text> que le téléphone ait été acheté chez Bouygues Telecom ou ailleurs ! </Text>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                </Columns>
                            </Row>
                        </Rows>

                    </Container>
                </Section>
            </div>
            {/* Section 5 - Almost same as the previous one + Button */}
            <div ref={(el) => {
                sectionRefs.current[3] = el
            }}>
                <Section backgroundColor="INFO_FADE">
                    <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                        <Rows className=" flex items-center justify-center content-center text-center">
                            <Row className="text-center">
                                <Title>Nos forfaits, pour vous</Title>
                            </Row>
                            <Row>
                                <Columns multiline verticalAlign="ALIGNED_CENTER" align="ALIGNED_CENTER" className="text-center">
                                    <Column size={5} >
                                        <Box>
                                            <BoxContent >
                                                <Rows className="flex items-center justify-center content-center text-center">
                                                    <Row>
                                                        <div className="flex flex-row">
                                                            <Image
                                                                src="/icons/sim.svg"
                                                                alt=" "
                                                                className="rounded-lg w-16 h-16 "
                                                                height={50}
                                                                width={50}
                                                            />
                                                            <Image
                                                                src="/icons/phone.svg"
                                                                alt=" "
                                                                className="rounded-lg w-16 h-16 "
                                                                height={50}
                                                                width={50}
                                                            />
                                                        </div>

                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> Découvrir nos forfaits
                                                            Bouygues Telecom </Title>
                                                    </Row>
                                                    <Row>
                                                        <Text>Bénéficiez d’un réseau mobile de qualité,
                                                            d’avantages et de services exclusifs
                                                            et d&apos;un nouveau smartphone. </Text>
                                                    </Row>
                                                    {/* I adjusted right margin for small screens because it goes a few pixels to the right */}
                                                    <Row className="mr-12 md:mr-0">
                                                        <Button variant="CONVERSION">En profiter</Button>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                    <Column size={5}>
                                        <Box >
                                            <BoxContent>
                                                <Rows className=" flex items-center justify-center content-center text-center">
                                                    <Row>
                                                        <Image
                                                            src="/icons/sim.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> Découvrir nos forfaits
                                                            B&YOU sans engagement</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text> Profitez de la qualité de notre réseau
                                                            avec nos forfaits B&YOU sans engagement.
                                                        </Text>
                                                    </Row>
                                                    <Row className="mr-12 md:mr-0">
                                                        <Button variant="CONVERSION">En profiter</Button>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                </Columns>
                            </Row>
                        </Rows>

                    </Container>
                </Section>
            </div>
            {/* Section 6 - A similar one with a couple of Links */}
            <div ref={(el) => {
                sectionRefs.current[4] = el
            }}>
                <Section backgroundColor="INFO">
                    <Container className="mx-auto px-6 md:px-40 max-w-screen-lg" >
                        <Rows className=" items-center ">
                            <Row>
                                <Title level={2} inverted>Quel que soit le problème, nous avons la solution</Title>
                            </Row>
                            <Row>
                                <Columns multiline className=" text-test-blue">
                                    <Column size={6} >
                                        <Box fullheight>
                                            <BoxContent>
                                                <Rows>
                                                    <Row>
                                                        <Image
                                                            src="/icons/phone_broken.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> Mon téléphone n’est plus sous garantie</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text>Si le téléphone que nous vous avons vendu n’est plus garanti et n’est pas assuré ou si vous n’avez pas acheté votre téléphone chez nous,
                                                            vous pouvez bénéficier d’une <span className="font-bold">réparation en boutique</span>, et <span className="font-bold">à prix réduit</span> si vous détenez un forfait Bouygues Telecom. </Text>
                                                    </Row>
                                                    <Row>
                                                        <Link>
                                                            Trouver ma boutique
                                                        </Link>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                    <Column size={6}>
                                        <Box fullheight>
                                            <BoxContent>
                                                <Rows gap={GapSize.ZERO}>
                                                    <Row>
                                                        <Image
                                                            src="/icons/hand_phone.svg"
                                                            alt=" "
                                                            className="rounded-lg w-16 h-16 "
                                                            height={50}
                                                            width={50}
                                                        />
                                                    </Row>
                                                    <Row>
                                                        <Title level={4}> Mon téléphone est sous garantie</Title>
                                                    </Row>
                                                    <Row>
                                                        <Text> <Link>Tous nos téléphones</Link> sont <span className="font-bold">garantis 2 ans</span>. Si vos téléphone tombe
                                                            en panne pendant ce délais et qu’il s’agit d’un défaut couvert
                                                            par les garanties légales (par exemple, un défaut de fabrication),
                                                            <span className="font-bold"> sa réparation est prise en charge gratuitement</span> par Bouygues Telecom.
                                                        </Text>
                                                    </Row>
                                                </Rows>
                                            </BoxContent>
                                        </Box>
                                    </Column>
                                </Columns>
                            </Row>
                        </Rows>
                    </Container>
                </Section>
            </div>
            {/* Section 7 - Combination of Rows and Columns with Boxes and an Image + Button */}
            <div ref={(el) => {
                sectionRefs.current[5] = el
            }}>
                <Section backgroundColor="DISABLED_FADE">
                    <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                        <Rows className="flex items-center justify-center content-center text-center">
                            <Row className="text-center">
                                <Title level={2}>L’assurance, la formule tout confort pour votre mobile</Title>
                            </Row>
                            <Row>
                                <Columns align="ALIGNED_CENTER"
                                    verticalAlign="ALIGNED_CENTER"
                                    multiline
                                    className="flex text-left"
                                >
                                    <Column size={6} className="w-full">
                                        <Image
                                            alt=""
                                            src={"/image3.webp"}
                                            width={676}
                                            height={324}
                                            className="hidden md:block rounded-lg object-cover"
                                        />
                                    </Column>
                                    <Column size={6} >
                                        <Rows gap={GapSize.EIGHT}>
                                            <Row>
                                                <Box >
                                                    <BoxContent>
                                                        <Rows gap={GapSize.ZERO}>
                                                            <Row>
                                                                <Image
                                                                    src="/icons/euro_sun.svg"
                                                                    alt=" "
                                                                    className="rounded-lg w-16 h-16"
                                                                    height={50}
                                                                    width={50}
                                                                />
                                                            </Row>
                                                            <Row>
                                                                <Title level={4}>Aucune dépense</Title>
                                                            </Row>
                                                            <Row>
                                                                <Text>à débourser en cas d’incident</Text>
                                                            </Row>
                                                        </Rows>
                                                    </BoxContent>
                                                </Box>
                                            </Row>
                                            <Row>
                                                <Box >
                                                    <BoxContent>
                                                        <Rows gap={GapSize.ZERO} >
                                                            <Row>
                                                                <Image
                                                                    src="/icons/hand_phone.svg"
                                                                    alt=" "
                                                                    className="rounded-lg w-16 h-16"
                                                                    height={50}
                                                                    width={50}
                                                                />
                                                            </Row>
                                                            <Row>
                                                                <Title level={4}>Téléphone assuré</Title>
                                                            </Row>
                                                            <Row>
                                                                <Text>en cas de vol, dommages ou oxydation</Text>
                                                            </Row>
                                                        </Rows>
                                                    </BoxContent>
                                                </Box>
                                            </Row>
                                        </Rows>
                                    </Column>
                                </Columns>
                            </Row>
                            {/* I made the button full width to match the width of the other elements in the section to match the maquette */}
                            <Row className="md:w-auto w-full px-10">
                                <Button
                                    variant="PRIMARY"
                                    className="w-full md:w-auto"
                                >
                                    L&apos;assurance en détail
                                </Button>
                            </Row>
                        </Rows>
                    </Container>
                </Section>
            </div>
            {/* Section 8 - Same as Section 3 without the swiper. Instead, the components fall under the other in small screen */}
            <div ref={(el) => {
                sectionRefs.current[6] = el
            }}>
                <Section backgroundColor="MAIN">
                    <Container className="mx-auto max-w-screen-lg">
                        <Rows className="flex justify-center items-center container text-center">
                            <Row className="flex justify-center items-center">
                                <Image
                                    src="/icons/phone_recycle.svg"
                                    alt=" "
                                    className="rounded-lg w-20 h-20"
                                    height={50}
                                    width={50}
                                />
                            </Row>
                            <Row className="flex text-center">
                                <Title inverted className="md:mx-40" level={2}>
                                    Réparer son téléphone, c’est aussi un geste
                                    pour l’environnement
                                </Title>
                            </Row>
                            <Row className="flex text-center">
                                <Title inverted className="md:mx-40" level={3}>
                                    Prolonger la durée de vie d’un an d’un téléphone permettrait
                                    de réduire son empreinte carbone de 30% environ*
                                </Title>
                            </Row>
                            <Row className="my-4 w-full">
                                <OutlineBox title="Comment?" className="mt-6 w-full pt-8 pb-8">
                                    <Columns gap={GapSize.TEN}>
                                        <Column className="md:mx-32">
                                            <Rows className="flex justify-center items-center w-full">
                                                <Row>
                                                    <Image
                                                        src="/icons/phone_up_down.svg"
                                                        alt=" "
                                                        className="rounded-lg w-16 h-16  "
                                                        height={50}
                                                        width={50}
                                                    />
                                                </Row>
                                                <Row>
                                                    <Title inverted level={4}>Environnement</Title>
                                                </Row>
                                                <Row>
                                                    <Text inverted>En évitant la production d’un nouveau mobile
                                                        et ses conséquences sur l’environnement.</Text>
                                                </Row>

                                            </Rows>
                                        </Column>
                                        <Column className="md:mx-32">
                                            <Rows className="flex justify-center items-center w-full">
                                                <Row>
                                                    <Image
                                                        src="/icons/recycle.svg"
                                                        alt=" "
                                                        className="rounded-lg w-16 h-16"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </Row>
                                                <Row>
                                                    <Title inverted level={4}>Recyclage</Title>
                                                </Row>
                                                <Row>
                                                    <Text inverted>En permettant le recyclage des pièces changées
                                                        suite à la réparation de votre téléphone.</Text>
                                                </Row>
                                            </Rows>
                                        </Column>
                                    </Columns>
                                </OutlineBox>
                            </Row>
                            <Row>
                                <Text>
                                    *Source : Green Alliance
                                </Text>
                            </Row>
                        </Rows>
                    </Container>
                </Section>
            </div>
            {/* Section 9 - Combination of Columns and Rows with an Image inside one big Box */}
            <div ref={(el) => {
                sectionRefs.current[7] = el
            }}>
                <Section backgroundColor="DISABLED_FADE">
                    <Container className="mx-auto px-6 md:px-40" >
                        <Rows className=" flex items-center justify-center text-center">
                            <Row>
                                <Title level={2}>Ensemble, faisons durer nos smartphones plus longtemps</Title>
                            </Row>
                            <Row>
                                <Box>
                                    <Columns verticalAlign="ALIGNED_CENTER" multiline className="text-left">
                                        <Column size={5} className="px-12 md:p-16">
                                            <Image alt="" src={"/logo_recycle.webp"} width={676} height={324} className="rounded-lg object-cover" />

                                        </Column>
                                        <Column size={7}>
                                            <Rows >
                                                <Row>
                                                    <Title level={4}> Nos téléphones ont une place particulière dans notre quotidien, en nous accompagnant partout et tout le temps</Title>
                                                </Row>
                                                <Row>
                                                    <Text> Alors pour s’en séparer le plus tard possible, on lance
                                                        <span className="font-bold"> les Solutions Smartphone Durable</span>
                                                        : 4 façons de prolonger la vie de nos mobiles tout en faisant un geste pour la planète.
                                                    </Text>
                                                </Row>
                                                <Row>
                                                    <Link>Découvrir nos solutions</Link>
                                                </Row>
                                            </Rows>


                                        </Column>
                                    </Columns>
                                </Box>
                            </Row>
                        </Rows>
                    </Container>
                </Section>
            </div>
            {/* Section 10 - 2 Columns and Introduction to Accordions */}
            <div ref={(el) => {
                sectionRefs.current[8] = el
            }}>
                <Section>
                    <Container className="flex justify-center items-center mx-auto px-6 md:px-40 max-w-screen-lg" >
                        <Columns multiline >
                            <Column size={6}>
                                <Title level={2} className="text-center md:text-left md:text-xl">
                                    Toutes vos questions sur la réparation de téléphone
                                </Title>
                            </Column>
                            <Column size={6}>
                                <Accordion className="bg-test-grey">
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Comment faire réparer son téléphone chez Bouygues Telecom ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet lorem </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Quels types de réparations propose le service ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Combien de temps prendra la réparation de mon téléphone ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Collpased by default </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> La réparation est-elle garantie ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Quels sont mes avantages si je fais réparer mon téléphone
                                                chez Bouygues Telecom ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Quelles marques de téléphones sont réparables ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader>
                                            <Text> Comment faire réparer mon téléphone tout en préservant la garantie ? </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text> Lorem ipsum dolor sit amet </Text>
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </Column>
                        </Columns>
                    </Container>
                </Section>
            </div>
            {/* Section 11 - This is a Section with a Box showing a Text only visible on mobile */}
            <Section backgroundSrc="/bg-ret.webp" className="md:hidden">
                <Box className="w-full items-center" >
                    <BoxContent>
                        <Title>À retenir</Title>
                    </BoxContent>
                </Box>
            </Section>

            {/* Section 12 - Return of Swiper but with Boxes that contain Images */}
            <Section backgroundColor="DISABLED_FADE">
                <Container className="flex justify-center items-center max-w-screen-lg mx-12" >
                    <Rows className="flex justify-center items-center container w-full">
                        <Row className="text-center">
                            <Title level={2}>Nos astuces pour prendre soin de votre mobile</Title>
                        </Row>
                        <Row className=" w-full">
                            <Container className=" mt-6 w-full flex flex-wrap ">
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    breakpoints={{
                                        0: { slidesPerView: 1 },
                                        640: { slidesPerView: 2 },   // 2 slides for tablets
                                        1024: { slidesPerView: 3 },  // 3 slides for desktops
                                    }}
                                    className="w-full swiper-container"
                                    loop={true}
                                >
                                    <SwiperSlide className="flex justify-center items-center w-full h-full">
                                        <Card fullheight>
                                            <CardImage alt={""} src="/image4.webp" />
                                            <CardContent>
                                                <Rows>

                                                    <Row >
                                                        <Title level={TitleLevels.SIX}>Comment prolonger la vie de son smartphone ?</Title>
                                                    </Row>
                                                    <Row >
                                                        <Link> Visiter WeFix </Link>
                                                    </Row >
                                                </Rows>

                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <Card fullheight>
                                            <CardImage alt={""} src="/image5.webp" />
                                            <CardContent>
                                                <Rows>

                                                    <Row >
                                                        <Title level={TitleLevels.SIX}> Comment protéger son smartphone de l’oxydation ? </Title>
                                                    </Row>
                                                    <Row >
                                                        <Link> Visiter WeFix </Link>
                                                    </Row >
                                                </Rows>

                                            </CardContent>
                                        </Card>

                                    </SwiperSlide>
                                    <SwiperSlide className="flex justify-center items-center w-full">
                                        <Card fullheight>
                                            <CardImage alt={""} src="/image6.webp" />
                                            <CardContent>
                                                <Rows>
                                                    <Row>
                                                        <Title level={TitleLevels.SIX}> Les conseils à suivre avant d’envoyer votre téléphone en réparation </Title>
                                                    </Row>
                                                    <Row>
                                                        <Link> Visiter WeFix </Link>
                                                    </Row>
                                                </Rows>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                </Swiper>
                            </Container>
                        </Row>
                    </Rows>
                </Container>
            </Section>

            {/* Section 13 - Last Section with Breadcrumb and Accordion */}
            <Section>
                <Container className="flex " >
                    <Rows>
                        <Row>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    Accueil
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    Choisir Bouygues Telecom
                                </BreadcrumbItem>
                                <BreadcrumbItem active>
                                    Recyclage
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <Row>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionHeader className="flex  justify-end">
                                            <Text>
                                                Mentions Légales
                                            </Text>
                                        </AccordionHeader>
                                        <AccordionBody>
                                            <Text>
                                                Merci pour l&apos;opportunité.
                                            </Text>

                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </Row>
                        </Row>
                    </Rows>
                </Container>
            </Section>
        </>
    );
}
