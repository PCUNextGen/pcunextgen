import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const images = [
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Workshop' },
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Project+Demo' },
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Hackathon' },
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Guest+Lecture' },
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Team+Meeting' },
    { src: 'https://via.placeholder.com/600x400.png/0a192f/64ffda?text=Club+Activity' },
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openLightbox = (imageIndex) => {
        setIndex(imageIndex);
        setOpen(true);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-accent mb-12">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, idx) => (
                    <motion.div
                        key={idx}
                        className="overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openLightbox(idx)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={image.src} alt={`Gallery image ${idx + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
                index={index}
            />
        </div>
    );
};

export default SectionWrapper(Gallery, 'gallery');