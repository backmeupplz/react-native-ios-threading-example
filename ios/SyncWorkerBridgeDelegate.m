//
//  SyncWorkerBridgeDelegate.m
//  Todorant
//
//  Created by Nikita Kolmogorov on 2021-01-23.
//  Copyright © 2021 Facebook. All rights reserved.
//

#import "SyncWorkerBridgeDelegate.h"
#import <React/RCTBundleURLProvider.h>

@implementation SyncWorkerBridgeDelegate

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
  
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"sync.thread.js" fallbackResource:@"sync.thread.js"];
}

@end
