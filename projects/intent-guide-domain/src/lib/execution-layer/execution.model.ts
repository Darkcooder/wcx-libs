import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityTimePeriodModel } from "../entity/entity-time-period.model";
import { IEntityModel } from "../entity/entity.model";
import { PlanDomainModel } from "../plan-layer/plan.model";
import { ExecutionActionDomainModel } from "./action.model";

export interface IExecutionDomainModel {
  plan: PlanDomainModel;
  actions: ExecutionActionDomainModel[];
}

export type ExecutionDomainModel = IExecutionDomainModel & IEntityModel & IEntityNamedModel & IEntityTimePeriodModel;
