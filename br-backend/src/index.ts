// import type { Core } from '@strapi/strapi';

// export default {
//   register(/* { strapi }: { strapi: Core.Strapi } */) {},

//   async bootstrap({ strapi }: { strapi: Core.Strapi }) {
//     await setupPublicPermissions(strapi);
//     await setupContactRequestListView(strapi);
//   },
// };

// async function setupPublicPermissions(strapi: Core.Strapi) {
//   try {
//     const publicRole = await strapi
//       .query('plugin::users-permissions.role')
//       .findOne({ where: { type: 'public' } });

//     if (!publicRole) {
//       console.warn('Public role not found');
//       return;
//     }

//     const publicEndpoints = [
//       'api::about-block.about-block',
//       'api::aesthetic.aesthetic',
//       'api::company-value.company-value',
//       'api::new.new',
//       'api::partner.partner',
//       'api::proud-item.proud-item',
//       'api::sales-area.sales-area',
//       'api::sales-district.sales-district',
//     ];

//     const actions = ['find', 'findOne'];

//     for (const endpoint of publicEndpoints) {
//       for (const action of actions) {
//         const permissionName = `${endpoint}.${action}`;

//         const existingPermission = await strapi
//           .query('plugin::users-permissions.permission')
//           .findOne({
//             where: {
//               action: permissionName,
//               role: publicRole.id,
//             },
//           });

//         if (!existingPermission) {
//           await strapi.query('plugin::users-permissions.permission').create({
//             data: {
//               action: permissionName,
//               role: publicRole.id,
//             },
//           });
//         }
//       }
//     }
//   } catch (error) {
//     console.error('Error setting up public permissions:', error);
//   }
// }

// async function setupContactRequestListView(strapi: Core.Strapi) {
//   try {
//     const contentTypeUid = 'api::contact-request.contact-request';
//     const storeKey = `plugin_content_manager_configuration_content_types::${contentTypeUid}`;

//     const existingConfig = await strapi.db.query('strapi::core-store').findOne({
//       where: { key: storeKey },
//     });

//     const defaultConfig = {
//       settings: {
//         bulkable: true,
//         filterable: true,
//         searchable: true,
//         pageSize: 10,
//         mainField: 'name',
//         defaultSortBy: 'createdAt',
//         defaultSortOrder: 'DESC',
//       },
//       metadatas: {
//         id: { edit: {}, list: { label: 'id', sortable: true } },
//         name: {
//           edit: { label: 'name', description: '', placeholder: '', visible: true, editable: true },
//           list: { label: 'name', sortable: true },
//         },
//         email: {
//           edit: { label: 'email', description: '', placeholder: '', visible: true, editable: true },
//           list: { label: 'email', sortable: true },
//         },
//         message: {
//           edit: { label: 'message', description: '', placeholder: '', visible: true, editable: true },
//           list: { label: 'message', sortable: true },
//         },
//         department: {
//           edit: { label: 'department', description: '', placeholder: '', visible: true, editable: true },
//           list: { label: 'department', sortable: true },
//         },
//         createdAt: {
//           edit: { label: 'createdAt', description: '', placeholder: '', visible: false, editable: true },
//           list: { label: 'createdAt', sortable: true },
//         },
//         updatedAt: {
//           edit: { label: 'updatedAt', description: '', placeholder: '', visible: false, editable: true },
//           list: { label: 'updatedAt', sortable: true },
//         },
//       },
//       layouts: {
//         list: ['id', 'name', 'email', 'department', 'createdAt'],
//         edit: [
//           [{ name: 'name', size: 6 }, { name: 'email', size: 6 }],
//           [{ name: 'department', size: 6 }],
//           [{ name: 'message', size: 12 }],
//         ],
//       },
//     };

//     if (!existingConfig) {
//       await strapi.db.query('strapi::core-store').create({
//         data: {
//           key: storeKey,
//           value: JSON.stringify(defaultConfig),
//           type: 'object',
//           environment: '',
//           tag: '',
//         },
//       });
//     } else {
//       const currentConfig = JSON.parse(existingConfig.value);

//       if (!currentConfig.layouts?.list?.includes('department')) {
//         currentConfig.layouts = currentConfig.layouts || {};
//         currentConfig.layouts.list = ['id', 'name', 'email', 'department', 'createdAt'];

//         currentConfig.metadatas = currentConfig.metadatas || {};
//         currentConfig.metadatas.department = {
//           edit: { label: 'department', description: '', placeholder: '', visible: true, editable: true },
//           list: { label: 'department', sortable: true },
//         };

//         await strapi.db.query('strapi::core-store').update({
//           where: { id: existingConfig.id },
//           data: { value: JSON.stringify(currentConfig) },
//         });
//       }
//     }
//   } catch (error) {
//     console.error('Error setting up contact-request list view:', error);
//   }
// }

// src/index.ts

export default {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register(/*{ strapi }*/) {},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	bootstrap(/*{ strapi }*/) {},
}
