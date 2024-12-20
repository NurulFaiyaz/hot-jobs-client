import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-fit">
            <div className="flex items-center  flex-col lg:flex-row-reverse ">
                <div className="flex flex-col py-20 mx-auto w-1/2">
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src="https://cdn.pixabay.com/photo/2015/07/07/09/45/language-school-834138_1280.jpg"
                        className="max-w-sm rounded-[40px] rounded-b-none rounded-br-[40px] border-green-600 shadow-2xl border-8 border-t-0 border-r-0" />
                    <motion.img
                       
                        animate={{ x: [150, 200, 150] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src="https://cdn.pixabay.com/photo/2023/07/07/08/50/sharepoint-training-8112055_1280.jpg"
                        className="max-w-sm rounded-[40px] rounded-b-none rounded-bl-[40px] border-green-600 shadow-2xl border-8 border-t-0 border-l-0" />
                </div>
                <div className="w-1/2">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-bold">
                        Hot Hot Jobs for you!!!!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;