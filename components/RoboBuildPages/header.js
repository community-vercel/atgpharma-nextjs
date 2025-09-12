// HOOKS
import useRobotContext from '../../hooks/useRobotContext';

function BuilderHeader() {
  const { buildDetails } = useRobotContext();
  return (
    <ol className="space-y-4 hidden md:flex md:space-y-0 md:space-x-8 mt-4">
      <li className="md:flex-1">
        <div href="#" className={`group pl-4 py-2 flex flex-col border-l-4 ${buildDetails.productType ? 'border-atgBlue ' : 'border-gray-200 hover:border-gray-300 animate-pulse'} md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`}>
          <span className="text-xs text-atgBlue font-semibold tracking-wide uppercase group-hover:text-atgBlue">Step 1</span>
          <span className="text-sm font-medium">Product</span>
        </div>
      </li>

      <li className="md:flex-1">
        <div href="#" className={`pl-4 py-2 flex flex-col border-l-4 ${buildDetails.isBuildFinalized ? 'border-atgBlue' : `border-gray-200 hover:border-gray-300 ${buildDetails.productType ? 'animate-pulse' : ''} `} md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`} aria-current="step">
          <span className={`text-xs ${buildDetails.isBuildFinalized ? 'text-atgBlue' : 'text-gray-500'} font-semibold tracking-wide uppercase`}>Step 2</span>
          <span className="text-sm font-medium">Build Parameters</span>
        </div>
      </li>

      <li className="md:flex-1">
        <div href="#" className={`group pl-4 py-2 flex flex-col border-l-4 ${buildDetails.isBuildFinalized ? 'animate-pulse' : ''} border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4`}>
          <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">Step 3</span>
          <span className="text-sm font-medium">Review</span>
        </div>
      </li>
    </ol>
  );
}
export default BuilderHeader;
