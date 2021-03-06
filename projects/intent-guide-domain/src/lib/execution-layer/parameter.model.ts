import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityModel } from "../entity/entity.model";
import { PlanParameterDomainModel } from "../plan-layer/parameter.model";

export interface IExecutionParameterDomainModel {
  plan: PlanParameterDomainModel,
  factValue: number,
}

export type ExecutionParameterDomainModel = IExecutionParameterDomainModel & IEntityModel & IEntityNamedModel;
