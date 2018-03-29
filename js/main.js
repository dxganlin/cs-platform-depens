var json = {
    "csapi": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csapi",
        "version": "3.1025.3-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csapi",
        "isAppLayer": true,
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapiService",
                "version": "3.1025.3-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapiLib",
                "version": "3.1025.3-RELEASE"
            }
        ]
    },
    "csapiService": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csapiService",
        "version": "3.1025.3-RELEASE",
        "type": "war",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csapiService",
        "parent": [{
            "groupId": "com.ebay.app.raptor",
            "artifactId": "csapi",
            "version": "3.1025.3-RELEASE",
            "gitPath": "https://github.corp.ebay.com/CS-Platform/csapi"
        }],
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1025.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cspubapiclient",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.cstmining",
                "artifactId": "CSTMining",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csdomain": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csdomain",
        "version": "3.1025.4-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csdomain",
        "parent": [{
            "groupId": "com.ebay.app.raptor",
            "artifactId": "csapiService",
            "version": "3.1025.3-RELEASE"
        }],
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdal",
                "version": "3.1025.3-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1021.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1025.0-RELEASE"
            }
        ]
    },
    "cspubapiclient": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cspubapiclient",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/cspubapiclient",
        "parent": [{
            "groupId": "com.ebay.app.raptor",
            "artifactId": "csapiService",
            "version": "3.1025.3-RELEASE"
        }],
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csdal": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csdal",
        "version": "3.1025.3-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csdal",
        "parent": [{
            "groupId": "com.ebay.app.raptor",
            "artifactId": "csdomain",
            "version": "3.1025.4-RELEASE"
        }],
        "dependencies": [
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem"
            }
        ]
    },
    "CSSiteDependencyDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSSiteDependencyDomain",
        "version": "3.1021.2-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSSiteDependencyDomain",
        "parent": [{
            "groupId": "com.ebay.app.raptor",
            "artifactId": "csdomain",
            "version": "3.1025.4-RELEASE"
        }],
        "dependencies": [
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "GlobalEnvironment"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "resdependency",
                "version": "1.8.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cs-rest-clients",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csrefds": {
        "groupId": "com.ebay.raptor.samples",
        "artifactId": "csrefds",
        "version": "2.1001.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csrefds",
        "isAppLayer": true,
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csbatchcommon",
                "version": "1.957.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "2.1001.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "2.1001.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "2.1001.2-RELEASE"
            }
        ]
    },
    "CSDispositionDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSDispositionDomain",
        "version": "3.1025.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSDispositionDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1021.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            }
        ]
    },
    "CSMacDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSMacDomain",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSMacDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "CSUnifyDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSUnifyDomain",
        "version": "3.1025.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSUnifyDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1025.4-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "CSBESDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSBESDomain",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSBESDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            }
        ]
    },
    // "CSSoapApiTypes": {
    //     "groupId": "com.ebay.app.raptor",
    //     "artifactId": "CSSoapApiTypes",
    //     "version": "3.1025.2-RELEASE",
    //     "gitPath": "https://github.corp.ebay.com/CS-Platform/CSSoapApiTypes"
    // },
    "CSCaseDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSCaseDomain",
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSCaseDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdal",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csbescase": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbescase",
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbescase",
        "isAppLayer": true,
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSegmentationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            }
        ]
    },
    "CSSharedApplication": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "CSSharedApplication",
        "version": "3.1025.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSSharedApplication",
        "dependencies": [
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "ASFDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSegmentationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1025.2-RELEASE"
            }
        ]
    },
    "CSSegmentationDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSSegmentationDomain",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSSegmentationDomain",
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdal",
                "version": "3.1017.1-RELEASE"
            }
        ]
    },
    "ASFDomain": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "ASFDomain",
        "version": "3.1017.2-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/ASFDomain",
        "dependencies": [
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csbesds": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbesds",
        "version": "3.1027.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbesds",
        "isAppLayer": true,
        "dependencies": [
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSDispositionSharedApp",
                "version": "3.1025.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1025.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSNotificationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1025.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.8.1365-E995_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            }
        ]
    },
    "CSDispositionSharedApp": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "CSDispositionSharedApp",
        "version": "3.1025.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSDispositionSharedApp",
        "dependencies": [
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1025.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1025.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "CSNotificationDomain": {
        "groupId": "com.ebay.cs.domain",
        "artifactId": "CSNotificationDomain",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSNotificationDomain",
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            }
        ]
    },
    "cspublicapi": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cspubapiParent",
        "version": "3.1025.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/cspublicapi",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cspubapi",
                "version": "3.1025.1-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cspubapiLib",
                "version": "3.1025.1-RELEASE"
            }
        ]
    },
    "cspubapi": {
        "artifactId": "cspubapi",
        "dependencies":[
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1021.2-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cspaypalapiclient",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSCommonLib",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "cspaypalapiclient": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cspaypalapiclient",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/cspaypalapiclient",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.2-RELEASE"
            }
        ]
    },
    "csapisec": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csapisec",
        "version": "3.1025.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csapisec",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapisecService",
                "version": "3.1025.1-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapisecLib",
                "version": "3.1025.1-RELEASE"
            }
        ]
    },
    "csapisecService": {
        "artifactId": "csapisecService",
        "dependencies": [
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1219-E1025_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiFwk",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.com.ebay.v4jars",
                "artifactId": "CSUserMessagingDomain",
                "version": "E993_DEV_BASE"
            },
            {
                "groupId": "com.ebay.impl.soa",
                "artifactId": "CSUserPolicyViolationServiceImpl",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "CSUserPolicyViolationService",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSAPIBizDomain",
                "version": "3.1025.7-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "CSPolicyDetailsService",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.impl.soa",
                "artifactId": "CSPolicyDetailsServiceImpl",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain",
                "version": "1.0.1223-E1025_DEV_BASE"
            }
        ]
    },
    "CSSoapApiFwk": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "CSSoapApiFwk",
        "version": "3.1017.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSSoapApiFwk",
        "dependencies": [
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiCommon",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "CSAPIBizDomain": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "CSAPIBizDomain",
        "version": "3.1025.7-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSAPIBizDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.libraries.cskb",
                "artifactId": "inquira-client",
                "version": "2.985.0-RELEASE"
            },
            {
                "groupId": "com.ebay.com.ebay.v4jars",
                "artifactId": "CSUserMessagingDomain",
                "version": "E993_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.impl.soa",
                "artifactId": "CSUserPolicyViolationServiceImpl",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "CSUserPolicyViolationService",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSNotificationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "NexusDomain",
                "version": "1.0.32-E969_DEV_BASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1021.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiCommon",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "ASFDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1025.0-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSUnifyDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSDispositionSharedApp",
                "version": "3.1021.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdal",
                "version": "3.1025.0-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem",
                "version": "1.0.1172-E991_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v4signin",
                "artifactId": "SignInDomain",
                "version": "1.0.37-E969_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.csv3",
                "artifactId": "CLVDomain",
                "version": "1.0.11-E969_DEV_BASE"
            },
            {
                "groupId": "com.ebay.libraries.cskb",
                "artifactId": "CSKbDomain",
                "version": "2.987.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "swift-client",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "2.1007.4-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "UserRegistrationApplication",
                "version": "1.0.1108-E989_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain",
                "version": "1.0.1223-E1025_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1219-E1025_DEV_BASE"
            }
        ]
    },
    "CSApiCommon": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "CSApiCommon",
        "version": "3.1017.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSApiCommon",
        "dependencies": [
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "CSKbDomain": {
        "groupId": "com.ebay.libraries.cskb",
        "artifactId": "CSKbDomain",
        "version": "2.1007.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/CSKbDomain",
        "dependencies":[
            {
                "groupId": "com.ebay.libraries.cskb",
                "artifactId": "inquira-client",
                "version": "2.985.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "2.1005.0-RELEASE"
            }
        ]
    },
    "swift-client": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "swift-client",
        "version": "3.1017.2-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/swift-client",
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            }
        ]
    },
    "csapi1": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csapi1",
        "version": "3.1025.7-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csapi1",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapi1Service",
                "version": "3.1025.7-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csapi1Lib",
                "version": "3.1025.7-RELEASE"
            }
        ]
    },
    "csapi1Service": {
        "artifactId": "csapi1Service",
        "dependencies":[
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALItem",
                "version": "1.0.1183-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "SearchDriver",
                "version": "1.0.1107-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "GlobalEnvironment",
                "version": "1.0.1237-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "CoreDomain",
                "version": "1.0.1223-E1025_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1219-E1025_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema",
                "version": "1.0.8.1372-E997_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiFwk",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1021.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSoapApiTypes",
                "version": "3.1025.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSAPIBizDomain",
                "version": "3.1025.7-RELEASE"
            }
        ]
    },
    "cskbwebapp": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cskbParent",
        "version": "2.1007.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/cskbParent",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cskbapp",
                "version": "2.1007.0-RELEASE",
                "type": "war"
            }
        ]
    },
    "cskbapp": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cskbapp",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/cskbParent",
        "dependencies":[
            {
                "groupId": "com.ebay.libraries.cskb",
                "artifactId": "CSKbDomain",
                "version": "2.1007.0-RELEASE"
            }
        ]
    },
    "csadmin": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csadmin",
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csadmin",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.raptor.samples",
                "artifactId": "csadminweb",
                "version": "3.1021.0-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            }
        ]
    },
    "csadminweb": {
        "artifactId": "csadminweb",
        "dependencies":[
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSNotificationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "cswebParent": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "cswebParent",  //csweb
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csweb",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csweb",
                "version": "3.1021.0-RELEASE",
                "type": "war"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            }
        ]
    },
    "csweb": {
        "artifactId": "csweb",
        "dependencies":[
            {
                "groupId": "com.ebay.v3project.v3core",
                "artifactId": "NexusDomain",
                "version": "1.0.32-E969_DEV_BASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3project.csv3",
                "artifactId": "CLVDomain",
                "version": "1.0.1012-E985_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-soa-consumers",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csbesns": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbesns",
        "version": "3.1025.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbesns",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSDispositionDomain",
                "version": "3.1017.5-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSNotificationDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiCSSchema"
            },
            {
                "groupId": "com.ebay.v3jars.apiSchema",
                "artifactId": "apiSharedSchema"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csbesasf": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbesasf",
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbesasf",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "ASFDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSSiteDependencyDomain",
                "version": "3.1021.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSMacDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.v3debt.apiSchema",
                "artifactId": "apiCSSchema",
                "version": "1.0.1017-DEV_BASE"
            }
        ]
    },
    "csbes0": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbes0",
        "version": "3.1017.1-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbes0",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.soa.interface",
                "artifactId": "cs-stti-consumers",
                "version": "3.1017.0-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor.client",
                "artifactId": "cs-rest-clients",
                "version": "3.1017.0-RELEASE"
            }
        ]
    },
    "csbesmisc": {
        "groupId": "com.ebay.app.raptor",
        "artifactId": "csbesmisc",
        "version": "3.1021.0-RELEASE",
        "gitPath": "https://github.corp.ebay.com/CS-Platform/csbesmisc",
        "isAppLayer": true,
        "dependencies":[
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSBESDomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.cs.domain",
                "artifactId": "CSCaseDomain",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "csdomain",
                "version": "3.1017.1-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "swift-client",
                "version": "3.1017.2-RELEASE"
            },
            {
                "groupId": "com.ebay.v3project.v3dal",
                "artifactId": "DALUser",
                "version": "1.0.1214-E1009_DEV_BASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSSharedApplication",
                "version": "3.1017.3-RELEASE"
            },
            {
                "groupId": "com.ebay.app.raptor",
                "artifactId": "CSApiSchema",
                "version": "3.1017.0-RELEASE"
            }
        ]
    }

};
//Collect keys of the above json object to a Array.
var jsonKeys = Object.keys(json);
//Click Search button to get the searchResult
var searchResult = {};

//init diagram
function init(nodeDataArray, linkDataArray, DiagramId) {
    var $ = go.GraphObject.make;

    myDiagram =
        $(go.Diagram, DiagramId,
            {
                // initialContentAlignment: go.Spot.Center,
                initialAutoScale: go.Diagram.UniformToFill,  // automatically scale down to show whole tree
                contentAlignment: go.Spot.Center,
                padding: 10,
                layout: $(go.LayeredDigraphLayout, { direction: 90, layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource, initializeOption:go.LayeredDigraphLayout.InitDepthFirstIn  }),
                "undoManager.isEnabled": true

            }
        );

    myDiagram.nodeTemplate =
        $(go.Node, go.Panel.Vertical,
            { portId: "", fromLinkable: true, toLinkable: true },
            $(go.Panel, go.Panel.Auto,
                $(go.Shape,
                    { fill: "white", minSize: new go.Size(30, 30), strokeWidth: 0 },
                    { cursor: "pointer" },  // indicate that linking may start here
                    new go.Binding("fill", "color")
                ),
                $(go.TextBlock,
                    { margin: 10 },
                    { fromLinkable: false, toLinkable: false },  // don't start drawing a link from the text
                    new go.Binding("text", "key")
                ),
                {
                    click: function(e, obj){
                        if(jQuery("#dialogDiagramDiv canvas").length ==0){
                            var nearJars = getNearJars(obj.part.data.key);
                            var dataArray = getDataArray(nearJars.nearJars);
                            init(dataArray.nodeDataArray, dataArray.linkDataArray, "dialogDiagramDiv");
                            jQuery( "#dialogDiagramDiv" ).dialog(
                                {
                                    close: function( event, ui ) {
                                        jQuery("#dialogDiagramDiv").remove();
                                        jQuery("#dialogDiagramDivContainer").append('<div id="dialogDiagramDiv" title="Near Selected Jar"></div>');
                                    },
                                    buttons: {
                                        Ok: function() {
                                            jQuery( this ).dialog( "close" );
                                        }
                                    },
                                    height: 600,
                                    width: 1000
                                }
                            );
                        }
                    }
                }

            ),
            $("Button",  // a replacement for "TreeExpanderButton" that works for non-tree-structured graphs
                // assume initially not visible because there are no links coming out
                { visible: false },
                // bind the button visibility to whether it's not a leaf node
                new go.Binding("visible", "isTreeLeaf",
                    function(leaf) {
                        return !leaf;
                    }
                ).ofObject(),
                $(go.Shape,
                    {
                        name: "ButtonIcon",
                        figure: "MinusLine",
                        desiredSize: new go.Size(6, 6)
                    },
                    new go.Binding("figure", "isCollapsed",  // data.isCollapsed remembers "collapsed" or "expanded"
                        function(collapsed) {
                            return collapsed ? "PlusLine" : "MinusLine";
                        }
                    )
                ),
                {
                    click: function(e, obj) {
                        e.diagram.startTransaction();
                        var node = obj.part;
                        if (node.data.isCollapsed) {
                            expandFrom(node, node);
                        } else {
                            collapseFrom(node, node);
                        }
                        e.diagram.commitTransaction("toggled visibility of dependencies");
                    }
                })
        );

    function collapseFrom(node, start) {
        if (node.data.isCollapsed) return;
        node.diagram.model.setDataProperty(node.data, "isCollapsed", true);
        if (node !== start) node.visible = false;
        node.findNodesOutOf().each(collapseFrom);
    }

    function expandFrom(node, start) {
        if (!node.data.isCollapsed) return;
        node.diagram.model.setDataProperty(node.data, "isCollapsed", false);
        if (node !== start) node.visible = true;
        node.findNodesOutOf().each(expandFrom);
    }

    myDiagram.linkTemplate =
        $(go.Link,
            { relinkableFrom: true, relinkableTo: true},
            $(go.Shape),
            $(go.Shape, { toArrow: "Standard" })
        );

    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
}

//Click any jar in diagram, it will pop up a dialog to show the nearest jars
//which dependency the clicked jar and dependencies jars of the clicked jar.
function getNearJars(jarName){
    var nearJars = {};
    for(var jar in json){
        var dependencies = json[jar].dependencies;
        for(var dependency of dependencies){
            if(dependency.artifactId == jarName){
                nearJars[jar] = {};
                $.extend(true, nearJars[jar], json[jar]);
                nearJars[jar].dependencies = [];
                nearJars[jar].dependencies.push(dependency);
            }
        }
    }
    if(json[jarName]){
        nearJars[jarName] = json[jarName];
    }
    return {
        nearJars: nearJars
    };
}

//Convert json object to diagram needed data style
function getDataArray(json){
    var nodeDataArray = [];
    var linkDataArray = [];
    var nodeDataArrayLocal = [{"key": "Root", color: "#e2343d" }];
    for(var key in json){
        if(!nodeDataArray.find(v => v["key"] === key)) {
            if(json[key].isAppLayer) {
                nodeDataArrayLocal.push({"key": key, color: "#87b62b", parent: "Root"});
                nodeDataArray.push({"key": key, color: "#87b62b" });
            } else {
                nodeDataArrayLocal.push({"key": key, color: "#f3ae29"});
                nodeDataArray.push({"key": key, color: "#f3ae29" });
            }
        }
        var dependencies = json[key].dependencies;
        if(dependencies){
            dependencies.forEach(function(value, index){
                var artifactId = value.artifactId;
                if(!nodeDataArray.find(v => v["key"] === artifactId)){
                    if(jsonKeys.includes(artifactId)) {
                        nodeDataArrayLocal.push({"key": key, color: "#f3ae29", parent: key});
                        nodeDataArray.push({"key": artifactId, color: "#f3ae29"});
                    } else {
                        nodeDataArrayLocal.push({"key": key, color: "#1067cf", parent: key});
                        nodeDataArray.push({"key": artifactId, color: "#1067cf"});
                    }

                }
                linkDataArray.push({ from: key, to: artifactId });
            });
        }
    }
    return {
        nodeDataArray: nodeDataArray,
        linkDataArray: linkDataArray,
        nodeDataArrayLocal: nodeDataArrayLocal
    }
}

//init myDiagramDiv the whole diagram
var dataArray = getDataArray(json);
init(dataArray.nodeDataArray, dataArray.linkDataArray, "myDiagramDiv");

function search(){
    searchResult = {};
    var appArr = ["csrefds", "csbescase", "csbesds", "cspubdivcapi", "csapisec", "csapi1",
        "csapi", "cskbwebapp", "csadmin", "cswebParent", "csbesns", "csbesasf", "csbes0", "csbesmisc"];
    var searchVal = document.getElementById('search').value;
    var dataArray = "";
    $('#myDiagramDiv').remove();
    $("#DiagramContainer").append('<div id="myDiagramDiv"></div>');
    if($.trim(searchVal) === ""){
        dataArray = getDataArray(json);
        init(dataArray.nodeDataArray, dataArray.linkDataArray, "myDiagramDiv");
        return;
    }
    var jarArr = searchVal.split(',');
    for(var jar of jarArr){
        var jarTrim = $.trim(jar);
        var isInclude = appArr.includes(jarTrim);
        if(isInclude){
            filterJson(jarTrim);
        }
    }
    dataArray = getDataArray(searchResult);
    init(dataArray.nodeDataArray, dataArray.linkDataArray, "myDiagramDiv");
}
function filterJson(jar){
    var isKey = jsonKeys.includes(jar);
    if(!isKey){
        return;
    } else {
        searchResult[jar] = json[jar];
        var depends = json[jar].dependencies;
        for(var i in depends){
            filterJson(depends[i].artifactId);
        }
    }
}

//help developer to collect json data from pom file
function filter(dependencies){
    var V3Arr = ["DALItem", "DALUser", "SearchDriver", "GlobalEnvironment",
        "CoreDomain", "apiCSSchema", "apiSharedSchema", "CSUserMessagingDomain",
        "NexusDomain", "SignInDomain", "CLVDomain", "UserRegistrationApplication",
        "resdependency"];
    var hasV3Arr =[];
    var finalObj = [];
    if(Object.prototype.toString.call(dependencies) == '[object Array]'){
        for(var dependency of dependencies){
            var result = V3Arr.find(value => value == dependency.artifactId);
            delete dependency.exclusions;
            if(result){
                hasV3Arr.push(result);
                finalObj.push(dependency);
            } else if(dependency.version && /[0-9]{3,4}/.test(dependency.version.substring(2,6))){
                finalObj.push(dependency);
            }
        }
    } else {
        finalObj.push(dependencies);
    }
    return {
        "hasV3Arr": hasV3Arr,
        "finalObj": finalObj
    }
}
// var result = filter(json.project.dependencies.dependency);
//var result = filter(json.project.dependencyManagement.dependencies.dependency);
// console.log(JSON.stringify(result.finalObj));


//get all jars
function getDepends(json){
    var allDepends = [];
    Array.prototype.push.apply(allDepends,jsonKeys);
    for(var appName in json){
        var depends = json[appName].dependencies;
        for(var depend in depends){
            var artifactId = depends[depend].artifactId;
            var isInclude = allDepends.includes(artifactId);
            isInclude ? "" : allDepends.push(artifactId);
        }
    }
    return allDepends;
}