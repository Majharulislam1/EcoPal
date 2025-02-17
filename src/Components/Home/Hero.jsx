
import hero_img from '../../assets/hero_img.png';

const Hero = () => {
    return (
        <div>
            <div className="relative h-[80vh] w-full">
                <img src={hero_img} alt="Background Image" className="absolute inset-0 w-full h-full object-cover object-center filter " />
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-6xl   my-6 text-white font-semibold text-center w-2/4">
                        Be part of the pack
                        and create a safer
                        world for animals
                    </h1>
                    <p className=" text-center my-5 text-white mt-4 w-2/5 ">
                    Join a global movement dedicated to protecting and caring for animals. Whether you’re an advocate, volunteer, or donor, your support helps build a world where all animals are safe, loved, and respected.
                    </p>
                    <button className='bg-primary my-5 rounded-full px-8 py-2 text-lg font-semibold'>
                        see more
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;