import Header from "./Header";
function AppLayout({ children }: any) {
    console.log(children)
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default AppLayout;