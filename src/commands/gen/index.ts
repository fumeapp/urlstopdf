/* eslint-disable no-await-in-loop */
import {Command} from '@oclif/core'
import puppeteer = require('puppeteer')
import PDFMerger = require('pdf-merger-js')
import fs = require('fs')

export default class Gen extends Command {
  static description = 'Generate a PDF'

  static examples = [
    '$ urltopdf gen https://google.com/ 16',
  ]

  static args = [
    {
      name: 'url',
      description: 'URL to screenshot',
      required: true,
    },
    {
      name: 'count',
      description: 'Amount of images to generate',
      required: true,
    },
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Gen)
    this.log(`Generating ${args.count}  versions of ${args.url}`)

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    page.setViewport({width: 816, height: 432, deviceScaleFactor: 2})
    await page.goto(args.url)

    // const merger = new PDFMerger()
    for (let i = 0; i < args.count; i++) {
      await page.reload({waitUntil: ['networkidle0', 'domcontentloaded']})
      await page.screenshot({path: `envelope${i}.png`})
      // await merger.add(`envelope${i}.pdf`)
    }

    await browser.close()
    // await merger.save(`${args.count}-envelopes.pdf`)
  }
}
