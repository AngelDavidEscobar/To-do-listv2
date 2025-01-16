//import './TodoLoading.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
function TodosLoading() {
    

  return (
   
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height={"100px"}>
    <p>
      <Skeleton count={6} />
    </p>
  </SkeletonTheme>
  );
}

export { TodosLoading };