/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Give permissions to a Doctor for a medical record
 * @param {org.conisol.mynetwork.AuthorizeAccess} authorize - the permissions
 * @transaction
 */
async function authorizeAccess(authorize) {  // eslint-disable-line no-unused-vars
    //Get the record owners
    const recordOwner = authorize.record.owner;
    //Get the current participant
    const me = getCurrentParticipant();
    //Get the doctor to authorize
    const doctorToAuth = authorize.doctor.getIdentifier();
    
    //if(recordOwner == me){
    
    // if the doctor is not already authorized, we authorize them
      let index = -1;
  
      if(!authorize.record.permissions) {
          authorize.record.permissions = [];
      }
      else {
          index = authorize.record.permissions.indexOf(doctorToAuth);
      }
  
      if(index < 0) {
          //Create a new permission
        authorize.record.permissions.push(doctorToAuth);
  
          // emit an event
          //const event = getFactory().newEvent('org.acme.pii', 'MemberEvent');
          //event.memberTransaction = authorize;
          //emit(event);
  
          // persist the state of the record
          const medicalRecordRegistry = await getAssetRegistry('org.conisol.mynetwork.MedicalRecord');  
            await medicalRecordRegistry.update(authorize.record);
      }
    /*}else{
    throw new Error('The current participant is not allowed to Authorize Access');
       }*/
  }
  /**
   * Revoke permissions to a Doctor for a medical record
   * @param {org.conisol.mynetwork.RevokeAccess} revoke - the permissions
   * @transaction
   */
  async function revokeAccess(revoke) {  // eslint-disable-line no-unused-vars
    //Get the record owners
    const recordOwner = revoke.record.owner;
    //Get the current participant
    const me = getCurrentParticipant();
    //Get the doctor to revoke
    const doctorToRev = revoke.doctor.getIdentifier();
    
     //if(recordOwner == me){
    // if the doctor is authorized, we remove them
     const index = revoke.record.permissions ? revoke.record.permissions.indexOf(doctorToRev) : -1;
    
      if(index>-1) {
            //Revoke a permission  
            revoke.record.permissions.splice(index, 1);
          
          // emit an event
          //const event = getFactory().newEvent('org.acme.pii', 'MemberEvent');
          //event.memberTransaction = authorize;
          //emit(event);
  
          // persist the state of the record
          const medicalRecordRegistry = await getAssetRegistry('org.conisol.mynetwork.MedicalRecord');  
            await medicalRecordRegistry.update(revoke.record);
      }
      /*}else{
    throw new Error('The current participant is not allowed to Authorize Access');
       }*/
  }
      