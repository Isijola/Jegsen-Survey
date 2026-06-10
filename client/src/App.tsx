import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import OnshoreSupport from "@/pages/OnshoreSupport";
import SurfacePositioning from "@/pages/SurfacePositioning";
import SubseaPositioning from "@/pages/SubseaPositioning";
import InstallationPositioning from "@/pages/InstallationPositioning";
import DimensionalControl from "@/pages/DimensionalControl";
import Survey from "@/pages/Survey";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/onshore-support" component={OnshoreSupport} />
      <Route path="/survey" component={Survey} />
      <Route path="/surface-positioning" component={SurfacePositioning} />
      <Route path="/subsea-positioning" component={SubseaPositioning} />
      <Route path="/installation-positioning" component={InstallationPositioning} />
      <Route path="/dimensional-control" component={DimensionalControl} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
