import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityTimePeriodModel } from "../entity/entity-time-period.model";
import { IEntityModel } from "../entity/entity.model";
import { MetodicDomainModel } from "../metodic-layer/metodic.model";
import { PlanActionDomainModel } from "./action.model";

export interface IPlanDomainModel {
  template: MetodicDomainModel,
  actions: PlanActionDomainModel[],
}

export type PlanDomainModel = IPlanDomainModel & IEntityModel & IEntityNamedModel & IEntityTimePeriodModel;
