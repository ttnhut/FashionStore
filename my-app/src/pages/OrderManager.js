import DashboardBase from "../components/DashboardBase"
import OrderManagerComponent from "../components/OrderManagerComponent"

const OrderManager = ()=>{
        return (
            <DashboardBase>
                <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
                    <OrderManagerComponent/>
                </main>
            </DashboardBase>
        )
}

export default OrderManager