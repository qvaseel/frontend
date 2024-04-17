import "./BlockAwards.css"
import { enum_awards } from "../../../types/awards"
import { useState } from "react"
import { motion } from "framer-motion"

const BlockAwards = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };
    return (
        <div>
            <div className="flex gap-8 flex-wrap">
                {enum_awards.map((item, index) => (
                    <motion.img
                        key={index}
                        src={item.img}
                        alt="image of award"
                        onClick={() => handleImageClick(item.img)}
                        whileHover={{ scale: 1.1 }}
                        style={{ cursor: 'zoom-in' }}
                    />
                ))}
            </div>
            <div className="absolute">
                {selectedImage && (
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseImage}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="image of award"
                            initial={{ y: '-100vh' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'spring', stiffness: 120 }}
                        />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default BlockAwards;