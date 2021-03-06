import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityTimePeriodModel } from "../entity/entity-time-period.model";
import { IEntityModel } from "../entity/entity.model";
import { PlanActionDomainModel } from "../plan-layer/action.model";
import { ExecutionParameterDomainModel } from "./parameter.model";

export interface IExecutionActionDomainModel {
  plan: PlanActionDomainModel,
  params: ExecutionParameterDomainModel[],
}

export type ExecutionActionDomainModel = IExecutionActionDomainModel & IEntityModel & IEntityNamedModel & IEntityTimePeriodModel;
