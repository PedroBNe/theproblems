import Link from "next/link";
import ConfigPro from "@/assets/config-pro-icon.svg";
import EditPro from "@/assets/edit-profile.svg";
import PrefNot from "@/assets/pref-not.svg";
import Privacy from "@/assets/privacy.svg";
import ConfigAcc from "@/assets/config-account.svg";
import ExitAcc from "@/assets/exit-icon.svg";
import Image from "next/image";

export default function ConfigsPer() {
    return(
        <div className="w-full flex flex-col gap-1 pl-4">
            <div className="flex gap-2">
                <Image src={ConfigPro} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">Meu Perfil</Link>
            </div>
            <div className="flex gap-2">
                <Image src={EditPro} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">{}Editar Perfil</Link>
            </div>
            <div className="flex gap-2">
                <Image src={PrefNot} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">{}Config de Notificacao</Link>
            </div>
            <div className="flex gap-2">
                <Image src={Privacy} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">{}Privacidade</Link>
            </div>
            <div className="flex gap-2">
                <Image src={ConfigAcc} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">{}Configuracoes da conta</Link>
            </div>
            <div className="flex gap-2">
                <Image src={ExitAcc} alt='config-profile-icon' width={15}/>
                <Link href="" target="_blank" className="hover:opacity-50 transition w-fit">{}Sair</Link>
            </div>
        </div>
    )
}