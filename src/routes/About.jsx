import React from 'react'
import Tilt from 'react-parallax-tilt';
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Experience, Tech } from '../components';
import BackButton from '../components/BackButton';

const About = () => {
  return (
    <>
      <BackButton to="/" routeName="Home" />
      <Tech/>
      <Experience />
    </>
  )
}

export default SectionWrapper(About,"about")