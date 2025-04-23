param appServicePlanName string
param location string
param webAppName string
param slotName string

resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: webAppName
  location: location
  properties: {
    serverFarmId: appServicePlanName
  }
}

resource deploymentSlot 'Microsoft.Web/sites/slots@2021-02-01' = {
  parent: appService
  name: slotName
  location: location
  properties: {
    serverFarmId: appServicePlanName
  }
}

output appServiceId string = appService.id
