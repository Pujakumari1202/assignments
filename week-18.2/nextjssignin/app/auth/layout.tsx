import {Navbar} from "@/components/Navbar";

export default function AuthLayout({children}){
    return <div>
        <Navbar/>
        {/*  final page add the layout */}
        {children}
    </div>
}