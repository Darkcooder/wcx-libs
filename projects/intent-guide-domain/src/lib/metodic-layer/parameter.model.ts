import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityModel } from "../entity/entity.model";

export interface IMetodicParameterDomainModel {
  measure: string;
}

export type MetodicParameterDomainModel = IMetodicParameterDomainModel & IEntityModel & IEntityNamedModel;
