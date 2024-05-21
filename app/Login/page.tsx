import React from "react";
import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
    return (
        <section className="bg-gray-50 min-h-screen flex itmes-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3x1 p-5">
                <div className="w-1/2 px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                    <p className="text-sm mt-4 text-[#002D74]">If you alredy a member, easily log in</p>

                    <form action="" className="flex flex-col gap-4">
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email" />
                        <input className="p-2 rounded-xl border" type="password" name="password" placeholder="Password"/><i className="fa-solid fa-eye absolute top-1/2 right-3 -translate-y-1/2"></i>
                        <button className="bg-[#002D74] rounded-xl text-white py-2">Login</button>
                    </form>

                    <div className="mt-10 ggrid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className={styles.parrafo}>OR</p>
                        <hr className="border-gray-400" />
                    </div>
                    <button className={styles.boton}><i className="fa-brands fa-google"></i> Login for Google</button>
                </div>

                <div className="w-1/2 p-5">
                    <Image src="/login.jpg" width={500} height={500} alt="Picture of the author"/>
                </div>
            </div>
        </section>
    );
}
