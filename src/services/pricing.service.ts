import { apiGet } from "./apiClient";

export async function getPricingPlans() {
  return apiGet("onboard/plan/");
}
