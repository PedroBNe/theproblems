'use client'

import Edit from '../../assets/edit-ico';
import LocationIcon from '@/assets/location-ico';
import CalenderIco from '@/assets/calender-ico';
import FireIco from '@/assets/fire-ico';
import LikeIco from '@/assets/like-ico';
import { Button } from '../Button';
import Link from 'next/link';
import CameraIco from '@/assets/camera-ico';
import { useState } from 'react';

export default function Profile() {
    const friends = 0
    const playDays = 0
    const maxPlayDays = 0
    const gamelike = 0
    const memberDays = 0
    const locale = 'Brazil'
    const profile = "@Seu_Perfil_aqui_12323"

    const [ editPP, setEditPP ] = useState(false)
    const [ editPB, setEditPB ] = useState(false)

    const SetEdit = () => {
        return () => setEditPP(!editPP);
    }

    const SetEditBanner = () => {
        return () => setEditPB(!editPB);
    }

    return(
        <div className="h-screen flex justify-center">
            <div className="w-[80%] flex flex-col items-center gap-5">
                <div className="w-full h-[24em] flex flex-col justify-between">
                    <div
                    className={`relative w-full h-[75%] rounded-b-xl bg-gray-600`}
                    onMouseEnter={ SetEditBanner() }
                    onMouseLeave={ SetEditBanner() }
                    >
                        {/* Banner Aqui */}
                        {editPB && (
                            <div className='w-full h-full bg-black bg-opacity-60'>
                                <Link href={''} className='w-fit absolute flex justify-center items-center gap-2 text-black font-bold bottom-2 right-2 p-2 rounded-full bg-white'>
                                    <CameraIco width={25} height={25} fillColor='black'/> Editar
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="w-full h-[25%] flex justify-between bg-transparent">
                        <div className="w-[50%] relative">
                            <div
                            className={`absolute w-[9em] h-[9em] top-[-70%] left-[3%] rounded-xl border-4 border-black bg-blue-300 shadow-2xl`}
                            onMouseEnter={ SetEdit() }
                            onMouseLeave={ SetEdit() }
                            >
                                {/* Foto de Perfil aqui */}
                                {editPP && (
                                    <div className='w-full h-full bg-black bg-opacity-60'>
                                        <Link href={''} className='w-fit absolute bottom-2 right-2 p-2 rounded-full bg-white'>
                                            <CameraIco width={25} height={25} fillColor='black'/>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="absolute p-2 flex flex-col gap-2 left-[29%]">
                                <h2 className="font-semibold text-2xl drop-shadow-2xl">{ profile }</h2>
                                <div className='flex gap-1 text-gray-400'>
                                    <LocationIcon width={18} height={18} color='#9ca3af' />
                                    { locale }
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%] flex justify-end items-center pr-8">
                            <button className='flex gap-1 justify-center items-center border-2 border-white rounded-xl p-2 hover:opacity-70 transition delay-100 ease-in-out'>
                                <Edit color={'#ffffff'} width={23} height={23} />
                                <h2 className='font-semibold text-xl'>Editar meu Perfil</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="w-[15%] flex flex-col gap-4">
                        <div className="bg-[#373952] p-3 rounded-xl">
                            <h2 className="font-semibold lg:text-lg">Amigos {friends}</h2>
                        </div>
                        <div className="h-[16em] flex flex-col gap-3 bg-[#373952] p-3 rounded-xl">
                            <h2 className="font-semibold lg:text-lg">Estatisticas</h2>
                            <div className='w-full flex gap-4'>
                                <CalenderIco width={40} height={40} fillColor='#9ca3af'/>
                                <div>
                                    <h3 className='text-[#9ca3af] font-semibold'>Membro ha</h3>
                                    <p className='font-semibold pl-2'>{ memberDays } Dias</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4'>
                                <LikeIco width={40} height={40} fillColor='#9ca3af' rotate={0}/>
                                <div>
                                    <h3 className='text-[#9ca3af] font-semibold'>Jogos curtidos</h3>
                                    <p className='font-semibold pl-2'>{ gamelike } Jogos</p>
                                </div>
                            </div>
                            <div className='w-full flex gap-4'>
                                <FireIco width={40} height={40} fillColor='#9ca3af'/>
                                <div>
                                    <h3 className='text-[#9ca3af] font-semibold'>Membro ha</h3>
                                    <p className='font-semibold pl-2'>{ playDays } Dias</p>
                                    <p className='text-sm text-[#9ca3af] font-semibold pl-2'>Maximo: { maxPlayDays } Dias</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#373952] p-3 rounded-xl">
                            <h2 className="font-semibold lg:text-lg">Atividade</h2>
                        </div>
                    </div>
                    <div className="w-[84%] p-3 flex flex-col rounded-xl bg-[#373952]">
                        <h2 className="font-semibold lg:text-lg">Jogos curtidos</h2>
                        <div className="w-full h-full flex flex-col gap-3 justify-center items-center">
                            <LikeIco width={70} height={70} fillColor='#9ca3af' rotate={0}/>
                            <h2 className='font-semibold text-xl'>Seus Jogos curtidos aparecerao aqui!</h2>
                            <p className='text-md text-[#9ca3af]'>Jogue alguns jogos, e curta para um livre e pratico acesso</p>
                            <Link href="">
                                <Button text={'Vamos Jogar!'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
