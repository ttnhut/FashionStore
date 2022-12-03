import DashboardBase from "../components/DashboardBase"
import PostManagerComponent from "../components/PostManagerComponent"

const PostManager = ()=>{
    return (
        <DashboardBase>
            <main className="ml-60 pt-16 max-h-screen overflow-auto text-center">
                <PostManagerComponent/>
            </main>
        </DashboardBase>
    )
}

export default PostManager
