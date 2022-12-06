import DashboardBase from "../components/DashboardBase"
import OrderComponent from "../components/OrderComponent"

const Order = ()=>{
    return (
        <DashboardBase>
                <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
                    <OrderComponent/>
                </main>
        </DashboardBase>
    )
}
export default Order