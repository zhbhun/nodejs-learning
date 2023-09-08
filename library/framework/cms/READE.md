# CMS

- https://github.com/gentics/headless-cms-comparison
- [strapi](https://github.com/strapi/strapi) - Open source Node.js Headless CMS to easily build customisable APIs.
- [KeystoneJS](https://github.com/keystonejs/keystone)
- https://github.com/agentejo/cockpit
- https://github.com/webiny/webiny-js
- [payload](https://github.com/payloadcms/payload) - Free and Open-source Headless CMS and Application Framework built with TypeScript, Node.js, React and MongoDB

## Feature

- field

    - name: Unique name for this field. Cannot be renamed without discarding data.
    - label
    - required
    - helperText: text to display beneath this input with helpful information. Explain to content editors how the field is used and how it should be set.
    - defaultValue
    - hidden
    - type

        - text

            - minChars
            - maxChars

        - long text

            - minChars
            - maxChars

        - rich text
        - color
        - number
        - boolean
        - date
        - time
        - media：image、video、audio
        - file
        - relation/ref
        - list

            - nestedFields

        - component/object

            - nestedFields

- componennt

    - name
    - description
    - fields

- collection / entity / model / singleton

    - name
    - description
    - fields
    - status:

        - draft
        - published

- content
- assets

    - folder

        - name
        - created

    - asset

        - id
        - name
        - type
        - size
        - dimension
        - alternativeText: This text will be displayed if the asset can’t be shown.
        - caption
        - created

- operation

    - list

        - sort
        - filter

            - field
            - type: is、is not、is greater than、is greater than or equal to、is lower than、is lower than or equal to
        
        - select
        - delete
        - move：图片资源文件夹移动
        - search：按名称搜索
        - layout：grid、list

- layout

    - settings

        - entryTitle

    - view

        - fields
        - field

            - name
            - description
            - placeholder
            - readonly
            - size：33%、50%、66%、100%

- setting

    - locale

        - code
        - name

    - ...
