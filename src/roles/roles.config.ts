import { FirestoreRolesConfiguration } from "firestore-roles";

import { RoleKey } from "./RoleKey";

const roles: FirestoreRolesConfiguration = {
    accountsCollection: "accounts",
    roleCollectionPrefix: "role_",
    roleRequestsCollectionPrefix: "rolereq_",
    roles: {
        [RoleKey.admin]: {
            manages: [RoleKey.provisioner, RoleKey.labeller, RoleKey.recorder],
        },
        [RoleKey.provisioner]: {
            manages: [RoleKey.labeller, RoleKey.recorder],
        },
        [RoleKey.labeller]: {
            manages: [],
        },
        [RoleKey.recorder]: {
            manages: [],
        },
    },
};

export default roles;
