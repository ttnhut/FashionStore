import CategoryManagerComponent from "../components/CategoryManagerComponent"
import DashboardBase from "../components/DashboardBase"

const CategoryManager = ()=>{
    return (
        <DashboardBase>
            <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
                <CategoryManagerComponent/>
            </main>
        </DashboardBase>
    )
}

export default CategoryManager