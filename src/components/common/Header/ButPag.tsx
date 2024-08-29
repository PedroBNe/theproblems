export const ButCard = ({ title, children }: any) => {
    return(
        <div className="w-full h-[90%] mt-2" >
            <h2 className="text-2xl font-bold text-center">
                {title}
            </h2>
            {children}
        </div>
    );
}