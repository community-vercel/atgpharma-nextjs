import { useContext } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

// CONTEXT_API
import { RoboCAPContext } from "../context";

const useRobotContext = () => {
  const [state, dispatch] = useContext(RoboCAPContext);
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["machines"]);

  const setProductType = async (
    productType,
    imageRoot,
    recomVessel,
    recommHeating,
    recommNozzle,
    output,
    savings
  ) => {
    dispatch({
      type: "SET_PRODUCT",
      payload: {
        type: productType,
        root: imageRoot,
        vessel: recomVessel,
        heating: recommHeating,
        nozzle: recommNozzle,
        output: output,
        savings: savings,
      },
    });
  };

  const setVessel = async (vesselSize, baseRoot) => {
    const heating = state.heating ? "H_" : "";
    const nozzle = state.nozzle ? state.nozzle : "1";
    const imageRoot =
      `${baseRoot}_${vesselSize}_` + `${heating}` + `${nozzle}` + ".jpg";
    dispatch({
      type: "SET_VESSEL_SIZE",
      payload: {
        size: vesselSize,
        root: imageRoot,
      },
    });
  };

  const setHeating = async (heatingRequirement, baseRoot) => {
    const vesselSize = state.vesselSize ? `${state.vesselSize}_` : "";
    const nozzle = state.nozzle ? state.nozzle : "1";
    const heating = heatingRequirement ? "H_" : "";
    const imageRoot =
      `${baseRoot}_${vesselSize}` + `${heating}` + `${nozzle}` + ".jpg";
    dispatch({
      type: "SET_HEATING",
      payload: {
        heating: heatingRequirement,
        root: imageRoot,
      },
    });
  };

  const setNozzle = async (nozzle, baseRoot, output, savings) => {
    const vesselSize = state.vesselSize ? `${state.vesselSize}_` : "";
    const heating = state.heating ? "H_" : "";
    const imageRoot =
      `${baseRoot}_${vesselSize}` + `${heating}` + `${nozzle}` + ".jpg";
    dispatch({
      type: "SET_NOZZLE",
      payload: {
        nozzle,
        output,
        savings,
        root: imageRoot,
      },
    });
  };

  const setBuildReviewState = async (entry) => {
    const {
      machines,
      index,
      productType,
      vesselSize,
      heating,
      nozzle,
      imageRoot,
    } = state;
    machines[index] = {
      productType,
      vesselSize,
      heating,
      nozzle,
      imageRoot,
    };
    dispatch({
      type: "SET_BUILD_STATE",
      payload: {
        buildState: entry,
        sessionMachines: machines,
      },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const setBackToReviewState = async (entry) => {
    dispatch({
      type: "BACK_TO_REVIEW",
      payload: true,
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const addBuild = async () => {
    dispatch({
      type: "ADD_BUILD_STATE",
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submit = async () => {
    router.push("/thankyou");
    dispatch({
      type: "SUBMIT",
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    removeCookie("machines", { path: "/" });
  };

  const editBuild = async (entry) => {
    const length = state.machines.length - 1;
    const index = Math.abs(entry - length);
    const { productType, vesselSize, heating, nozzle, imageRoot } =
      state.machines[index];
    dispatch({
      type: "EDIT_BUILD_STATE",
      payload: {
        productType,
        vesselSize,
        heating,
        nozzle,
        imageRoot,
        index,
      },
    });
  };

  const deleteBuild = async (entry) => {
    const length = state.machines.length - 1;
    const index = Math.abs(entry - length);
    const builds = state.machines;
    builds.splice(index, 1);
    let buildState;
    if (builds.length > 0) {
      buildState = true;
      setCookie("machines", builds, { path: "/" });
    } else {
      buildState = false;
      removeCookie("machines", { path: "/" });
    }
    dispatch({
      type: "DELETE_BUILD",
      payload: {
        build: builds,
        finalized: buildState,
      },
    });
  };

  const setImageRoot = async (entry) => {
    const length = state.machines.length - 1;
    const index = Math.abs(entry - length);
    dispatch({
      type: "SET_IMAGE_ROOT",
      payload: state.machines[index].imageRoot,
    });
  };

  const jumpToReview = async (entry) => {
    if (entry) {
      const index = entry.length - 1;
      dispatch({
        type: "JUMP_REVIEW",
        payload: {
          machines: entry,
          root: entry[index].imageRoot,
        },
      });
    }
    router.push("/build");
  };

  return {
    setProductType,
    setVessel,
    setBuildReviewState,
    setHeating,
    setNozzle,
    addBuild,
    setImageRoot,
    editBuild,
    jumpToReview,
    submit,
    setBackToReviewState,
    deleteBuild,
    buildDetails: state,
  };
};

export default useRobotContext;
