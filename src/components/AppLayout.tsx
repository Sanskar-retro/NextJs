import Header from "./Header";
function AppLayout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default AppLayout;