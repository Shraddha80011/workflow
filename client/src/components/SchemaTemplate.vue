<template>
  <div>
    <iframe id="filecontainer" allowtransparency="true" frameborder="0" :src="html" @load="iframeload(formSchemaInstance.entity, log)"></iframe>
    <ul class="error">
      <li v-for="item in err">{{item}}</li>
    </ul>
    <!-- <div v-html="html"></div> 
    <Button type="primary" @click="handleSubmit('formSchemaInstance')">Submit</Button>-->
  </div>
</template>

<script>
import Instance from '@/api/instance'
import Schema from '@/api/schema'
import _ from 'lodash'
import $ from 'jquery'

export default {
  props: {
    html: {
      type: String
    },
    row: Object,
    log: Object
  },
  data () {
    return {
      entitySchema: {},
      customSchema: [],
      formSchemaInstance: {
        data: [],
        entity: []
      },
      inputs: [],
      schema: {},
      err: []
    }
  },
  async created () {
    this.fetch(this.row.inputProperty[0].entityschema._id)
    Schema.getThis(this.row.inputProperty[0].entityschema._id).then((response) => {
      this.entitySchema = response
    })
  },
  methods: {
    async iframeload (entities, log) {
      let self = this
      let array = []
      let data = []
      let custom = []
      let customSchema = []

      for (let i = 0; i < entities.length; i++) {
        if (entities[i].customtype === true) {
          custom = await self.getCustom(entities[i].type, true)
          array.push({customtype: true, name: entities[i].name, entity: custom})
          custom = await self.getCustom(entities[i].type, false)
          customSchema.push(custom)
        } else {
          array.push({name: entities[i].name})
          customSchema.push(entities[i])
        }
      }
      self.customSchema = customSchema
      // _.forEach(entities, function (value) {
      //   array.push({name: value.name})
      // })
      _.forEach(log.input, function (item) {
        data.push(item)
      })
      document.getElementById('filecontainer').contentWindow.postMessage({entity: array, formData: data}, '*')
    },
    async getCustom (id, flag) {
      let tempSchema
      let tempData = []
      let customData = []
      let data = []
      let self = this
      tempSchema = await self.getSchema(id)
      for (let i = 0; i < tempSchema.entity.length; i++) {
        if (tempSchema.entity[i].customtype === true) {
          tempData = await self.getCustom(tempSchema.entity[i].type, true)
          data.push({customtype: true, name: tempSchema.entity[i].name, entity: tempData})
          tempData = await self.getCustom(tempSchema.entity[i].type, false)
          customData.push(tempData)
        } else {
          data.push({name: tempSchema.entity[i].name})
          customData.push(tempSchema.entity[i])
        }
      }
      return flag ? data : customData
    },
    async getSchema (id) {
      let data
      await Schema.getThis(id).then((res) => {
        data = res.data
      })
      return data
    },
    async fetch (id) {
      var response = await Schema.getThis(id)
      this.formSchemaInstance.data = []
      this.schema = response.data
      this.formSchemaInstance.entity = this.schema.entity
    },
    makeObj () {
      var obj = this.schema
      obj.Schemaid = this.schema._id
      obj.data = this.inputs
      return obj
    },
    // async checkData () {
    //   this.err = []
    //   let err = this.err
    //   let self = this
    //   let val
    //   let obj = {}

    //   $('input#custom_input').each(function () {
    //     // let element = this
    //     // _.forEach(self.entitySchema.data.entity, function (result) {
    //     //   result.name = result.name.toLowerCase()
    //     //   if (result.name === element.name.slice(0, result.name.length)) {
    //     //     let emailRegEx = '(\\w+)\\@(\\w+)\\.[a-zA-Z]'
    //     //     let numberRegEx = '^[0-9]+$'
    //     //     let dateRegEx = '(0?[1-9]|[12]\\d|30|31)[^\\w\\d\\r\\n:](0?[1-9]|1[0-2])[^\\w\\d\\r\\n:](\\d{4}|\\d{2})'
    //     //     val = element.value
    //     //     // document.getElementsByName(element.name)[0].hasAttribute('required') result.property.optional === false
    //     //     if (result.property.optional === false) {
    //     //     // if (element.hasAttribute('required')) {
    //     //       if (val === '' || val === null || val === undefined) {
    //     //         err.push(element.name + ' - is required..!')
    //     //         if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //           $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> required..!</div>')
    //     //         }
    //     //       } else {
    //     //         // obj[element.name] = val
    //     //         // self.formSchemaInstance.data[0][element.name] = val
    //     //         $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //       }

    //     //       if (element.hasAttribute('pattern')) {
    //     //         let pttrn = new RegExp(result.property.regEx)
    //     //         let regEx = pttrn.test(val)
    //     //         if (!regEx) {
    //     //           err.push(element.name + ' - Enter proper format..!')
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter proper format..!</div>')
    //     //           }
    //     //         } else {
    //     //           // obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         }
    //     //       }
    //     //       if (element.type === 'date') {
    //     //         let inputDate = new Date(val)
    //     //         if (result.property.maxdate !== '') {
    //     //           let maxDate = new Date(result.property.maxdate)
    //     //           if (inputDate > maxDate) {
    //     //             err.push(element.name + ' - Enter minimum date then ' + maxDate)
    //     //             if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //               $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter minimum date then ' + maxDate + '</div>')
    //     //             }
    //     //           } else {
    //     //             // obj[element.name] = val
    //     //             // self.formSchemaInstance.data[0][element.name] = val
    //     //             $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //           }
    //     //         } else if (result.property.mindate !== '') {
    //     //           let minDate = new Date(result.property.mindate)
    //     //           if (inputDate < minDate) {
    //     //             err.push(element.name + ' - Enter maximum date then ' + minDate)
    //     //             if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //               $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter minimum date then ' + minDate + '</div>')
    //     //             }
    //     //           } else {
    //     //             // obj[element.name] = val
    //     //             // self.formSchemaInstance.data[0][element.name] = val
    //     //             $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //           }
    //     //         }
    //     //       }
    //     //       if (result.property.min !== 0 || result.property.max !== 0) {
    //     //         if (val.length > result.property.min && val.length > result.property.max) {
    //     //           err.push(element.name + ' - Minimum length :' + result.property.min + ' Maximum length :' + result.property.max)
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Minimum length :' + result.property.min + ' Maximum length :' + result.property.max + '</div>')
    //     //           }
    //     //         } else if (val.length > result.property.max && val.length < result.property.min) {
    //     //           err.push(element.name + ' - Minimum length :' + result.property.min + ' Maximum length :' + result.property.max)
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Minimum length :' + result.property.min + ' Maximum length :' + result.property.max + '</div>')
    //     //           }
    //     //         } else {
    //     //           // obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         }
    //     //       }
    //     //       if (result.property.allowedValue.length > 0) {
    //     //         let check = _.includes(result.property.allowedValue, val)
    //     //         if (!check) {
    //     //           err.push(element.name + ' - Allowed value are' + result.property.allowedValue)
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Allowed value are' + result.property.allowedValue + '</div>')
    //     //           }
    //     //         } else {
    //     //           // obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         }
    //     //       }
    //     //     }
    //     //     switch (element.type) {
    //     //       case 'email':
    //     //         let re = new RegExp(emailRegEx)
    //     //         let testEmail = re.test(val)
    //     //         if (testEmail) {
    //     //           obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         } else {
    //     //           err.push(element.name + ' - Enter valid email address..!')
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter valid email address..!</div>')
    //     //           }
    //     //         }
    //     //         break
    //     //       case 'number':
    //     //         re = new RegExp(numberRegEx)
    //     //         testEmail = re.test(val)
    //     //         if (testEmail) {
    //     //           obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         } else {
    //     //           err.push(element.name + ' - Enter numbers only..!')
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter numbers only..!</div>')
    //     //           }
    //     //         }
    //     //         break
    //     //       case 'date':
    //     //         re = new RegExp(dateRegEx)
    //     //         testEmail = re.test(val)
    //     //         if (testEmail) {
    //     //           obj[element.name] = val
    //     //           // self.formSchemaInstance.data[0][element.name] = val
    //     //           $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //     //         } else {
    //     //           err.push(element.name + ' - Invalid date format..!')
    //     //           if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //     //             $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Invalid date format..!</div>')
    //     //           }
    //     //         }
    //     //         break
    //     //       default:
    //     //         obj[element.name] = val
    //     //         // self.formSchemaInstance.data[0][element.name] = val
    //     //     }
    //     //   }
    //     // })
    //   })
    //   $('input#radio1').each(function () {
    //     let element = this
    //     _.forEach(self.entitySchema.data.entity, function (result) {
    //       result.name = result.name.toLowerCase()
    //       if (result.name === element.name.slice(0, result.name.length)) {
    //         $('#' + element.id).attr('required', '')
    //       }
    //     })
    //   })
    //   $('input#checkbox1').each(function () {
    //     let element = this
    //     _.forEach(self.entitySchema.data.entity, function (result) {
    //       result.name = result.name.toLowerCase()
    //       if (result.name === element.name.slice(0, result.name.length)) {
    //         $('#' + element.id).attr('required', '')
    //       }
    //     })
    //   })
    //   $('input#radio1').each(function () {
    //     let element = this
    //     _.forEach(self.entitySchema.data.entity, function (result) {
    //       result.name = result.name.toLowerCase()
    //       if (result.name === element.name.slice(0, result.name.length)) {
    //         if (element.hasAttribute('required')) {
    //           if ($('input[name="' + element.name + '"]:checked').length < 1) {
    //             err.push(element.name + ' - is required..!')
    //             if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //               $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;">' + result.name + ' required..!</div>')
    //             }
    //           } else {
    //             let myRadio = $('input[name="' + element.name + '"]')
    //             let checkedValue = myRadio.filter(':checked').val()
    //             obj[element.name] = checkedValue
    //             // self.formSchemaInstance.data[0][element.name] = val
    //             $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //           }
    //         } else {
    //           let myRadio = $('input[name="' + element.name + '"]')
    //           let checkedValue = myRadio.filter(':checked').val()
    //           obj[element.name] = checkedValue
    //         }
    //       }
    //     })
    //   })
    //   $('input#checkbox1').each(function () {
    //     let element = this
    //     _.forEach(self.entitySchema.data.entity, function (result) {
    //       result.name = result.name.toLowerCase()
    //       if (result.name === element.name.slice(0, result.name.length)) {
    //         if (element.hasAttribute('required')) {
    //           if ($('input[name="' + element.name + '"]:checked').length < 1) {
    //             err.push(element.name + ' - is required..!')
    //             if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //               $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;">' + result.name + ' required..!</div>')
    //             }
    //           } else {
    //             let checkedVal = []
    //             $('input[name="' + element.name + '"]:checked').each(function () {
    //               checkedVal.push(this.value)
    //             })
    //             obj[element.name] = checkedVal
    //             // self.formSchemaInstance.data[0][element.name] = val
    //             $('input[name="' + element.name + '"]').parent().next('.validation').remove()
    //           }
    //         } else {
    //           let checkedVal = []
    //           $('input[name="' + element.name + '"]:checked').each(function () {
    //             checkedVal.push(this.value)
    //           })
    //           obj[element.name] = checkedVal
    //           // self.formSchemaInstance.data[0][element.name] = val
    //         }
    //       }
    //     })
    //   })
    //   $('select#select1').each(function () {
    //     let element = this
    //     _.forEach(self.entitySchema.data.entity, function (result) {
    //       result.name = result.name.toLowerCase()
    //       if (result.name === element.name.slice(0, result.name.length)) {
    //         let tag = element.selectedIndex
    //         let options = element.options
    //         val = options[tag].text
    //         if (result.property.optional === false) {
    //           if (val === 'Please Select' || val === null || val === undefined || val === '') {
    //             err.push(element.name + ' - is required..!')
    //             if ($('select[name="' + element.name + '"]').parent().next('.validation').length === 0) {
    //               $('select[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> required..!</div>')
    //             }
    //           } else {
    //             obj[element.name] = val
    //             // self.formSchemaInstance.data[0][element.name] = val
    //             $('select[name="' + element.name + '"]').parent().next('.validation').remove()
    //           }
    //         }
    //       }
    //     })
    //   })
    //   if (err.length > 0) {
    //     return false
    //   } else {
    //     let keys = []
    //     _.forEach(Object.keys(obj), function (key) {
    //       keys.push(key.charAt(key.length - 2))
    //     })
    //     let position = Math.max(...keys)
    //     _.forEach(obj, function (value, key) {
    //       if (position === 0) {
    //         self.formSchemaInstance.data[0][key.slice(0, key.length - 3)] = value
    //       } else {
    //         let index = key.charAt(key.length - 2)
    //         if (self.formSchemaInstance.data[index]) {
    //           self.formSchemaInstance.data[index][key.slice(0, key.length - 3)] = value
    //         } else {
    //           self.formSchemaInstance.data.push({'schemaid': self.schema._id, 'database': self.schema.database, [key.slice(0, key.length - 3)]: value})
    //         }
    //       }
    //     })
    //     return true
    //   }
    // },
    async handleSubmit (validated) {
      let obj = await this.makeObj()
      console.log('Submitted Data', obj.data)
      console.log()
      if (validated && this.inputs.length > 0) {
        Instance.post({ instanceid: this.$route.params.id, processid: this.log.job, jobId: this.log.jobId, data: obj.data })
        .then(response => {
          this.$Notice.success({title: 'success!', desc: 'Instance Saved...'})
        })
        .catch(error => {
          console.log('Error', error)
          this.$Notice.error({title: 'Error!', desc: 'Instance Not Saved...'})
        })
      } else {
        this.$Notice.error({
          title: 'Error..!',
          desc: 'Details are in bottom of page.'
        })
        this.inputs = []
      }
    },
    async getValidate (event, schema) {
      let self = this
      let err = this.err
      let val, result, element, newSchema
      schema === undefined ? newSchema = self.customSchema : newSchema = schema
      let emailRegEx = '(\\w+)\\@(\\w+)\\.[a-zA-Z]'
      let numberRegEx = '^[0-9]+$'
      let dateRegEx = '(0?[1-9]|[12]\\d|30|31)[^\\w\\d\\r\\n:](0?[1-9]|1[0-2])[^\\w\\d\\r\\n:](\\d{4}|\\d{2})'
      await Object.keys(event).forEach(async function (key, index) {
        for (var i = 0; i < newSchema.length; i++) {
          if (key === newSchema[i].name || Array.isArray(newSchema[i])) {
            val = event[key]
            result = newSchema[i]
            element = {value: event[key], name: key, type: Array.isArray(event[key]) ? 'customtype' : newSchema[i].type}
            if (element.type === 'customtype') {
              self.getValidate(event[key][0], newSchema[i])
            } else {
              if (result.property.optional === false) {
                if (val === '' || val === null || val === undefined) {
                  err.push(element.name + ' - is required..!')
                  if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                    $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> required..!</div>')
                  }
                } else {
                  $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                }
                if (result.property.regEx !== null || result.property.regEx !== undefined) {
                  let pttrn = new RegExp(result.property.regEx)
                  let regEx = pttrn.test(val)
                  if (!regEx) {
                    err.push(element.name + ' - Enter proper format..!')
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter proper format..!</div>')
                    }
                  } else {
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  }
                }
                if (element.type === 'date') {
                  let inputDate = new Date(val)
                  if (result.property.maxdate !== '') {
                    let maxDate = new Date(result.property.maxdate)
                    if (inputDate > maxDate) {
                      err.push(element.name + ' - Enter minimum date then ' + maxDate)
                      if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                        $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter minimum date then ' + maxDate + '</div>')
                      }
                    } else {
                      $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                    }
                  } else if (result.property.mindate !== '') {
                    let minDate = new Date(result.property.mindate)
                    if (inputDate < minDate) {
                      err.push(element.name + ' - Enter maximum date then ' + minDate)
                      if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                        $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter minimum date then ' + minDate + '</div>')
                      }
                    } else {
                      $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                    }
                  }
                }
                if (result.property.min !== 0 || result.property.max !== 0) {
                  if (val.length > result.property.min && val.length > result.property.max) {
                    err.push(element.name + ' - Minimum length :' + result.property.min + ' Maximum length :' + result.property.max)
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Minimum length :' + result.property.min + ' Maximum length :' + result.property.max + '</div>')
                    }
                  } else if (val.length > result.property.max && val.length < result.property.min) {
                    err.push(element.name + ' - Minimum length :' + result.property.min + ' Maximum length :' + result.property.max)
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Minimum length :' + result.property.min + ' Maximum length :' + result.property.max + '</div>')
                    }
                  } else {
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  }
                }
                if (result.property.allowedValue.length > 0) {
                  let check = _.includes(result.property.allowedValue, val)
                  if (!check) {
                    err.push(element.name + ' - Allowed value are' + result.property.allowedValue)
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Allowed value are' + result.property.allowedValue + '</div>')
                    }
                  } else {
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  }
                }
              }
              switch (element.type) {
                case 'email':
                  let re = new RegExp(emailRegEx)
                  let testEmail = re.test(val)
                  if (testEmail) {
                    // temp[element.name] = val
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  } else {
                    err.push(element.name + ' - Enter valid email address..!')
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter valid email address..!</div>')
                    }
                  }
                  break
                case 'number':
                  re = new RegExp(numberRegEx)
                  testEmail = re.test(val)
                  if (testEmail) {
                    // temp[element.name] = val
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  } else {
                    err.push(element.name + ' - Enter numbers only..!')
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Enter numbers only..!</div>')
                    }
                  }
                  break
                case 'date':
                  re = new RegExp(dateRegEx)
                  testEmail = re.test(val)
                  if (testEmail) {
                    // temp[element.name] = val
                    $('input[name="' + element.name + '"]').parent().next('.validation').remove()
                  } else {
                    err.push(element.name + ' - Invalid date format..!')
                    if ($('input[name="' + element.name + '"]').parent().next('.validation').length === 0) {
                      $('input[name="' + element.name + '"]').parent().after('<div class="validation" style="color:red;"> Invalid date format..!</div>')
                    }
                  }
                  break
                default:
                  console.log(element.name, ': ', val)
              }
            }
          }
        }
      })
      if (err.length > 0) { return false } else { return true }
    }
  },
  async mounted () {
    let self = this
    let validated

    window.addEventListener('message', async function (event) {
      self.err = []
      if (_.isArray(event.data)) {
        for (let j = 0; j < event.data.length; j++) {
          validated = await self.getValidate(event.data[j])
          event.data[j].Schemaid = self.entitySchema.data.id
          self.inputs.push(event.data[j])
        }
        self.handleSubmit(validated)
      }
    })
  }
}
</script>
<style scoped>
.error {
  color: red;
}
#filecontainer {
  min-height: 500px;
  min-width: 100%; 
}
</style>